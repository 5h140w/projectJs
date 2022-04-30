const form = document.querySelector("form")

const Number = document.querySelector("#number")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(Number.value)
    console.log(typeof(Number.value))
})