"use strict";
import "../sass/main.scss";

const btnOpen = document.querySelector(".btn-hamburger");
const navigation = document.querySelector(".nav-links");

btnOpen.addEventListener("click", function () {
  navigation.classList.toggle("active");
  btnOpen.classList.toggle("active");
});
