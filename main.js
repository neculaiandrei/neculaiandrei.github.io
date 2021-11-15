const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu--show');
});

const theme = document.querySelector(".home__theme");
theme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


const moreButtons = document.querySelectorAll(".experience__more");

moreButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.parentNode.querySelector(".experience__extra");
    const extraDisplay = extra.style.display ? extra.style.display : window.getComputedStyle(extra, null).getPropertyValue('display');

    if (extraDisplay === 'none') {
      extra.style.display = 'block';
      btn.innerHTML = 'Less';
    } else {
      extra.style.display = 'none';
      btn.innerHTML = 'More';
    }
  });
})