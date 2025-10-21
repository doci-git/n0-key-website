// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Email di destinazione per il form (sostituisci con la tua)
const CONTACT_EMAIL = "docimusa@gmail.com";

// Endpoint per invio diretto (es. Formspree: https://formspree.io/f/XXXXXX)
// Lascia vuoto per usare il fallback "mailto" (apre client email)
const FORM_ENDPOINT = "";

// Form submission handler
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const phone = formData.get("phone") || "";
  const message = formData.get("message") || "";

  if (FORM_ENDPOINT) {
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      document.getElementById("form-success").style.display = "block";
      form.reset();
      return;
    } catch (err) {
      alert(
        "Invio non riuscito. Riprova più tardi o contattaci via email."
      );
      return;
    }
  }

  const subject = `Nuova richiesta da ${name}`;
  const body = [
    `Nome: ${name}`,
    `Email: ${email}`,
    `Telefono: ${phone}`,
    "",
    "Messaggio:",
    message,
  ].join("\n");

  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;

  document.getElementById("form-success").style.display = "block";
  form.reset();
}

// Add animation classes to elements on scroll
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
