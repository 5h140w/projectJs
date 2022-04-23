const colors =["red","green","blue"]
const btn = document.querySelector("#btn")
const color = document.querySelector("#color")

btn.addEventListener("click",()=>{
    let rand = Math.floor(Math.random()*(colors.length))
    document.body.style.backgroundColor = colors[rand]
    color.innerHTML = colors[rand]
})
