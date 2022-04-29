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
    link.addEventListener("click",(e)=>{
        e.preventDefault()
        const id= e.currentTarget.getAttribute("href").slice(1)
        const element = document.querySelector("#"+id)
        const navHeight = nav.getBoundingClientRect().height
        let position = element.offsetTop-  navHeight 
        const fixed = nav.classList.contains("fixed-nav")
        let linksHeight= links.getBoundingClientRect().height
        console.log(linksHeight)
        if(!fixed){
            position -= navHeight +10   
        }
        if(navHeight>100){
            position+= linksHeight
        }
        console.log(position)
        window.scrollTo(0,position)
        linksHeight !==0 ? links.classList.remove("show") : console.log("nice") 
    })
})