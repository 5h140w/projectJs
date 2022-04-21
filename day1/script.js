const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")

setInterval(()=>{
    let currentDay = new Date()
    hour.innerHTML = currentDay.getHours()
    minute.innerHTML = currentDay.getMinutes()
    second.innerHTML = currentDay.getSeconds()
    
},1000)