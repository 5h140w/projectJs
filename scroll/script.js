const toogle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".menu")
const banner = document.querySelector(".banner")

toogle.addEventListener("click",()=>{
    nav.classList.toggle("show")
    const linksHeight = nav.getBoundingClientRect().height;
    console.log(linksHeight)
    if(linksHeight==0){
        banner.style.marginTop ="50px"
    } else{
        let xx = linksHeight + 50
        console.log(typeof(linksHeight))
        banner.style.marginTop = xx+"px"
        console.log(banner)
    }
})