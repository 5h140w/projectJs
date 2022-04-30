const deadline = new Date(2022,4,2,11,30,00)
const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

const time = ()=>{
    const now = new Date()
    let delta = (deadline- now) /1000
    days.innerHTML = Math.floor(delta /(24*3600))
    hours.innerHTML = Math.floor((delta / 3600)%24)
    minutes.innerHTML = Math.floor((delta/60)%60)
    seconds.innerHTML = Math.floor(delta%60)
}
time()
const countdown = setInterval(()=>{
    time()
},1000)


if(new Date()>deadline){
    clearInterval(countdown)
    days.innerHTML = 0
    hours.innerHTML =0
    minutes.innerHTML = 0
    seconds.innerHTML = 0
    console.log("Giveaway Ended!")
}