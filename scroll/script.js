const toogle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".menu")


toogle.addEventListener("click",()=>{
    nav.classList.toggle("show")
    const linksHeight = nav.getBoundingClientRect().height;
    console.log(linksHeight)

})