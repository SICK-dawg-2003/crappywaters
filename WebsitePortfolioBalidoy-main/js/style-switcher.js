/* BALIDOY, MARK CEDRIC A.                                 CITCS-CC1-1L-B */

/* TOGGLE THIS STYLE SWITCHER FUNCTIONS TO CHANGE COLOR */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});


/* THE THEME COLORS*/
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  localStorage.setItem("color", color);
  changeColor();
}

function changeColor() {
  alternateStyle.forEach((style) => {
    if (localStorage.getItem("color") === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/* LIGHT MODE/DARK MODE */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

window.addEventListener("load", () => {
  // Start in dark mode
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.body.classList.add("dark");
  dayNight.querySelector("i").classList.add("fa-sun");
});