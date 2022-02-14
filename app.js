let Headlayer2 = document.querySelector(".header-layer-two");
let Headlayer3 = document.querySelector(".header-layer-three");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-btns");
const navLink = document.querySelectorAll(".nav-link");

// this is for the scroll parallax effect
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  Headlayer2.style.right = value * 0.3 + "px";
  Headlayer3.style.left = value * 0.3 + "px";
});

//this is for the auto image slider
let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));
