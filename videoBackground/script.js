const video = document.querySelector("video")
const btn = document.querySelector(".btn")


btn.addEventListener("click",()=>{
    if (btn.innerHTML=='Pause'){
        video.pause()
        btn.innerHTML= 'Play'
    } else{
        video.play()
        btn.innerHTML='Pause'
    }
})