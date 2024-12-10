document.querySelector(".button1").addEventListener("click", () => {
  document.querySelectorAll(".hidden").forEach((item) => {
    item.classList.toggle("showing");
  });
});