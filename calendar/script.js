const current_day = new Date()
const isLeap= (year) =>{
    return (year % 4 == 0 && year % 100 !=0 && year % 400 !=0) || (year %100 ==0 && year %400 == 0)
}

GetFebruaryDays = (year) =>{
    return isLeap(year) ? 29 :28
}

const generateCalendar = (year,month) =>{
    const days = document.querySelector(".days")
    const month_name = document.querySelector("#month_name")
    
    const months=[
        {"name":"January" , "nd":31}, 
        {"name":"February", "nd":GetFebruaryDays(year)} , 
        {"name":"March" ,"nd":31},
        { "name":"April" ,"nd":30}, 
        {"name":"May" ,"nd":31} , 
        {"name":"June" ,"nd":30}, 
        {"name":"July" ,"nd":31} , 
        {"name":"August" ,"nd":31} , 
        {"name":"September" ,"nd":30} , 
        {"name":"October" ,"nd":31} , 
        {"name":"November" ,"nd":30} , 
        {"name":"December" ,"nd":31}
    ]
    month_name.innerHTML = months[month].name
    days.innerHTML=""
    let first_day = new Date(year,month,1)
    for (let i =0 ; i <= months[month].nd + first_day.getDay() - 1 ; i++){
        let day = document.createElement("div")
        if(i>= first_day.getDay()){
            day.classList.add("calendar_day")
            day.innerHTML = i - first_day.getDay() +1
            if(i - first_day.getDay() + 1 === current_day.getDate() && year === current_day.getFullYear() && month === current_day.getMonth()){
                day.classList.add("current_day")
            }
        }
        days.appendChild(day)
    }
}

let currentday = new Date()
let year = currentday.getFullYear()
let month = currentday.getMonth()
window.addEventListener("load",()=>{
    generateCalendar(year,month)
})


const next = document.querySelector(".next")
next.addEventListener("click",()=>{
    month++
    if(month>11){
        year++
    }
    generateCalendar(year,month)
})