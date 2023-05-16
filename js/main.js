// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

const navbar = document.querySelector(".koen-nav");
const navList = document.querySelector(".nav-list");
const main = document.querySelectorAll(".container-md");

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    navbar.classList.add("navbar-side");
    navList.classList.add("flex-column");
    for (let i = 0; i< main.length; i++) {
        main[i].classList.add("margin-left");
    }
  } else {
    navbar.classList.remove("navbar-side");
    navList.classList.remove("flex-column");
    for (let i = 0; i< main.length; i++) {
        main[i].classList.remove("margin-left");
    }
  }
}
