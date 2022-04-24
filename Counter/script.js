let bnts = document.querySelectorAll(".btn")
let value = document.querySelector(".value")
let counter =0
bnts.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        const event = e.currentTarget.classList
        if(event.contains("decrease")){
            counter--
        }
        if(event.contains("reset")){
            counter=0
        }
        if(event.contains("increase")){
            counter++
        }
        value.innerHTML = counter
        counter === 0 ? value.style.color="#222" : (counter>0) ? value.style.color="green" : value.style.color="red"

    })
})