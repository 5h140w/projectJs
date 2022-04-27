const qs = document.querySelectorAll(".q")

qs.forEach((question)=>{
    const btn = question.querySelector(".question-btn")
    console.log(btn)
    btn.addEventListener("click",()=>{
        question.classList.toggle("show")
    })
})