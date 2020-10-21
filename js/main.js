const button = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
  menu.classList.toggle("active");
});
