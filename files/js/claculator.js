let themeBtn = document.querySelector("#theme");
let overlay = document.querySelector(".overlay");
let calc = document.querySelector(".calculator");

themeBtn.addEventListener("click", () => {
  calc.classList.toggle("light-theme")
});