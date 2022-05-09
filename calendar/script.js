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
    const color = ["#16a085","#1abc9c","#c0392b","#27ae60","#FF6860","#f39c12","#f1c40f","#e67e22","#2ecc71","#e74c3c","#d35400","#2c3e50"];
    const calendar_banner = document.querySelector(".calendar_banner")
    calendar_banner.style.backgroundColor = color[month]
    month_name.innerHTML = `${months[month].name} ${year}` 
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


const next = document.querySelector(".fa-chevron-right")
next.addEventListener("click",()=>{
    month++
    if(month>11){
        year++
        month=0
    }
    generateCalendar(year,month)
})



const prev = document.querySelector(".fa-chevron-left")
prev.addEventListener("click",()=>{
    month--
    if(month<0){
        year--
        month=11
    }
    generateCalendar(year,month)
})