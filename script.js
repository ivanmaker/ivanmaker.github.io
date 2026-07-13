const yearTargets = document.querySelectorAll("[data-year]");
yearTargets.forEach((target) => {
  target.textContent = new Date().getFullYear();
});

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const printButton = document.querySelector("[data-print-resume]");
if (printButton) {
  printButton.addEventListener("click", () => window.print());
}
