// VANILLA JAVASCRIPT:

// SELECTORS:

const home = document.querySelector("nav ul li:nth-child(1)");

const about = document.querySelector("nav ul li:nth-child(2)");

const services = document.querySelector("nav ul li:nth-child(3)");

const contact = document.querySelector("nav ul li:nth-child(4)");

const navBar = document.querySelector(".nav-bar");

home.addEventListener("click", () => {

  navBar.style.left = "590px";

  navBar.style.width = "60px";

});

about.addEventListener("click", () => {

  navBar.style.left = "658px";

  navBar.style.width = "60px";

});

services.addEventListener("click", () => {

  navBar.style.left = "725px";

  navBar.style.width = "80px";

});

contact.addEventListener("click", () => {

  navBar.style.left = "811px";

  navBar.style.width = "80px";

});
