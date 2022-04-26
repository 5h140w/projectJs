const btn = document.querySelector(".nav-toggle")
const menu = document.querySelector(".menu")
const social = document.querySelector(".social-icons")
let show=false

btn.addEventListener("click",()=>{
    menu.classList.toggle("show")
    social.classList.toggle("show")
})