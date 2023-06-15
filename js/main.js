// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

const navbar = document.querySelector(".koen-nav");
const navList = document.querySelector(".nav-list");
const main = document.querySelectorAll(".container-md");
const aboutMe = document.querySelector(".about-me");
const contact = document.querySelector(".contact");
const projects = document.querySelector(".projects");

aboutMe.addEventListener("click", () => {
    if (screen.width > 1000) {
        window.scrollTo(0, 600)
    }
    else {
        window.scrollTo(0, 600)
    }
})

contact.addEventListener("click", () => {
    if (screen.width > 1000) {
        window.scrollTo(0, 1000)
    }
    else {
        window.scrollTo(0, 1200)
    }
})

projects.addEventListener("click", () => {
    if (screen.width > 1000) {
        window.scrollTo(0, 1200)
    }
    else {
        window.scrollTo(0, 1400)
    }
})

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        navbar.classList.add("navbar-side");
        navList.classList.add("flex-column");
        main[0].style.paddingTop = "70px"
        for (let i = 0; i < main.length; i++) {
            main[i].classList.add("margin-left");
        }
    } else {
        navbar.classList.remove("navbar-side");
        navList.classList.remove("flex-column");
        main[0].style.paddingTop = "0px"
        for (let i = 0; i < main.length; i++) {
            main[i].classList.remove("margin-left");
        }
    }
}

