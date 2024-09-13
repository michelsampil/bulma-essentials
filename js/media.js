// js/media.js
document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".media-right .delete");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".media").remove();
    });
  });
});
