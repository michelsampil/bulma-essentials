// js/dropdown.js
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown:not(.is-hoverable)");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdown.classList.toggle("is-active");
    });
  });

  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("is-active");
    });
  });
});
