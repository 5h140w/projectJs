const toggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".linksContainer")
const nav = document.querySelector("nav")
toggle.addEventListener("click",()=>{
    links.classList.toggle("show")
})


const heigth = nav.getBoundingClientRect().height

console.log(heigth)