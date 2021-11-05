const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    document.querySelector(".panel.active").classList.remove("active");
    panel.classList.add("active");
  });
});
