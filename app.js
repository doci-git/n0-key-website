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

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  // Simulate form submission
  const form = event.target;
  const formData = new FormData(form);

  // Show success message
  document.getElementById("form-success").style.display = "block";

  // Reset form
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
