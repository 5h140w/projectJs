const btns = document.querySelectorAll(".btn")
const contents = document.querySelectorAll(".content")
window.addEventListener("load",()=>{
    btns.forEach((btn)=>{
        if(btn.getAttribute("data-id")=="history"){
            btn.classList.add("active")
        }
    })
    contents.forEach((content)=>{
        if(content.getAttribute("id")=="history"){
            content.classList.add("show")
        }
    })
})