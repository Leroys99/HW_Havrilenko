const btn__burger = document.querySelector("#btn-burger");
const header = document.querySelector("#header");

btn__burger.addEventListener("click", function () {
  header.classList.toggle("menu-open");
  btn__burger.classList.toggle("btn-close");
});

