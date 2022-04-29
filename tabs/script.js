const btns = document.querySelectorAll(".btn")
const contents = document.querySelectorAll(".content")
const btnContainer = document.querySelector(".btns")
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

btnContainer.addEventListener("click",(e)=>{
    const id = e.target.dataset.id
    btns.forEach((btn)=>{
        btn.classList.remove("active")
    })
    e.target.classList.add("active")
    contents.forEach((content)=>{
        content.classList.remove("show")
    })
    document.getElementById(id).classList.add("show")
})