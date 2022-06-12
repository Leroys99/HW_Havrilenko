const btn__burger = document.querySelector("#btn-burger");
const header = document.querySelector("#header");
const toggleMenu = () => {
  header.classList.toggle("menu-open");
  btn__burger.classList.toggle("btn-close");
};
btn__burger.onclick = toggleMenu;

const menuBtns = document.querySelectorAll(".menu-item");
menuBtns.forEach((btn) => {
  btn.onclick = toggleMenu;
});