'use strict';

const menu = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
const mainContent = document.querySelector('.main-content');
const container = document.querySelector('.container');
const cross = document.querySelector('.cross');

const closeNav = function () {
    mainNav.style.transform = "translateX(-100%)";
    // document.getElementById("main-nav").style.pointerEvents = "none";
    // mainNav.style.visibility = "hidden";
}

menu.addEventListener('click', function () {
    mainNav.style.transform = "translateX(0)";
    mainNav.style.transition = "all 0.5s";
    mainNav.style.width = "18rem";
    cross.classList.remove('hidden');
    // document.getElementById("main-nav").style.pointerEvents = "auto";
    // mainNav.style.visibility = "visible";
    

});

cross.addEventListener('click', closeNav);
// mainContent.addEventListener('click',closeNav);