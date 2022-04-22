const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")

let birthday = new Date(2022,5,24)

setInterval(()=>{    
    let currentDay = new Date()
    let delta = Math.floor((birthday-currentDay) / 1000)
    let deltaInSecond = delta %60
    let deltaInMinute = Math.floor(delta/60)%(60)
    let deltaInHours = Math.floor(delta/3600)
    hour.innerHTML = deltaInHours
    minute.innerHTML = deltaInMinute
    second.innerHTML = deltaInSecond 
},1000)