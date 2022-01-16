window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("touch", window.scrollY > 0);
});

let input = document.querySelector(".input");
input.addEventListener("click", function () {
  input.classList.add("verify");
});

let pombo = document.querySelector(".pombo");
pombo.addEventListener("click", function () {
  pombo.classList.add("verify");
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navegation = document.querySelector(".navegation");
  menuToggle.classList.toggle("active");
  navegation.classList.toggle("active");
}
