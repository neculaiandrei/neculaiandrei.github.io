const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--show");
});

const cachedTheme = localStorage.getItem("__theme");
if (cachedTheme === undefined) {
  cachedTheme = "light";
  localStorage.setItem("__theme", "light");
}

if (cachedTheme === "dark") {
  document.body.classList.add("dark");
}

const theme = document.querySelectorAll(".home__theme");
theme.forEach((t) =>
  t.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      localStorage.setItem("__theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("__theme", "dark");
    }
  })
);

const moreButtons = document.querySelectorAll(".experience__more");
moreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const extra = btn.parentNode.querySelector(".experience__extra");
    const extraDisplay = extra.style.display
      ? extra.style.display
      : window.getComputedStyle(extra, null).getPropertyValue("display");

    if (extraDisplay === "none") {
      extra.style.display = "block";
      btn.innerHTML = "Less";
    } else {
      extra.style.display = "none";
      btn.innerHTML = "More";
    }
  });
});
