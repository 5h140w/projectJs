const toggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".linksContainer")
const nav = document.querySelector("nav")
toggle.addEventListener("click",()=>{
    links.classList.toggle("show")
})

window.addEventListener("scroll",()=>{
    const current_heigth = window.pageYOffset
    if(current_heigth> 0){
        nav.classList.add("fixed-nav")
    }else{
        nav.classList.remove("fixed-nav")
    }
    
})


//const heigth = nav.getBoundingClientRect().height

//console.log(heigth)

const Alllinks = document.querySelectorAll(".link")

Alllinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        console.log(link)
    })
})