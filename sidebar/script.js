const btn = document.querySelector(".btn")
const nav = document.querySelector("nav")
const toggle = document.querySelector(".sidebar-toggle")
toggle.addEventListener("click",()=>{
    nav.classList.toggle("show-sidebar")
})
btn.addEventListener("click",()=>{
    nav.classList.remove("show-sidebar")
})