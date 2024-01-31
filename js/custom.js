"use strict";

// Mobile menu
const hamburguerIcon = document.querySelector(".fh5co-nav-toggle");
const mobileMenu = document.querySelector(".menu-1");
const mobileMenuBg = document.querySelector(".menu-1::before");
const navLinks = document.querySelectorAll(".fh5co-nav ul li a");
const pageBody = document.querySelector("body");

hamburguerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    if (mobileMenu.classList.contains("active")) {
        pageBody.style.overflow = "hidden";
    } else {
        pageBody.style.overflow = "visible";
    }
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        pageBody.style.overflow = "visible";
    })
})