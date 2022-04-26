const btn = document.querySelector(".nav-toggle")
const menu = document.querySelector(".menu")
const social = document.querySelector(".social-icons")
let show=false

btn.addEventListener("click",()=>{
    if(!show){
        menu.classList.add("show")
        social.classList.add("show")
    }else{
        menu.classList.remove("show")
        social.classList.remove("show")
    }
    show= !show;
})