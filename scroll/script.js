const toggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".linksContainer")

toggle.addEventListener("click",()=>{
    links.classList.toggle("show")
})