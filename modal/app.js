const open = document.querySelector(".modal-btn")
const close = document.querySelector(".close-btn")
const overlay = document.querySelector(".modal-overlay")

open.addEventListener("click",()=>{
    overlay.classList.add("show")
})

close.addEventListener("click",()=>{
    overlay.classList.remove("show")
})