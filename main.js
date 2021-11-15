const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu--show');
});

const theme = document.querySelector(".home__theme");
theme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});