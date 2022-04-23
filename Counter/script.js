let bnts = document.querySelectorAll(".btn")
let value = document.querySelector(".value")
let counter =0
bnts.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        const style = e.currentTarget.classList
        if(style.contains("decrease")){
            counter--
        }
        if(style.contains("reset")){
            counter=0
        }
        if(style.contains("increase")){
            counter++
        }
        value.innerHTML = counter
    })
})