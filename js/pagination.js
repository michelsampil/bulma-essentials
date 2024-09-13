// js/pagination.js
document.addEventListener("DOMContentLoaded", () => {
  const pagination = document.querySelector(".pagination");
  const prevButton = pagination.querySelector(".pagination-previous");
  const nextButton = pagination.querySelector(".pagination-next");
  const pageLinks = pagination.querySelectorAll(".pagination-link");

  pageLinks.forEach((link) => {
    link.addEventListener("click", () => {
      pageLinks.forEach((item) => item.classList.remove("is-current"));
      link.classList.add("is-current");
    });
  });

  prevButton.addEventListener("click", () => {
    // Add your logic for previous button here
  });

  nextButton.addEventListener("click", () => {
    // Add your logic for next button here
  });
});
