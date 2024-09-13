document.addEventListener("DOMContentLoaded", () => {
  const tableRows = document.querySelectorAll("table tbody tr");

  tableRows.forEach((row) => {
    row.addEventListener("click", () => {
      tableRows.forEach((r) => r.classList.remove("is-selected"));
      row.classList.add("is-selected");
    });
  });
});
