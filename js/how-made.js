const buttonBox = document.querySelector(".button-box");
const bgBox = document.querySelector(".background-box");
const textBox = document.querySelector(".text-box");

//button
buttonBox.addEventListener("mouseover", () => {
    buttonBox.innerHTML = "#d34455"
})
buttonBox.addEventListener("mouseout", () => {
    buttonBox.innerHTML = "btn/link color"
})

//background
bgBox.addEventListener("mouseover", () => {
    bgBox.innerHTML = "#202529"
})
bgBox.addEventListener("mouseout", () => {
    bgBox.innerHTML = "bg color"
})

//text
textBox.addEventListener("mouseover", () => {
    textBox.innerHTML = "#FBFBFB"
})
textBox.addEventListener("mouseout", () => {
    textBox.innerHTML = "tex color"
})