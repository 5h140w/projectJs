const day = new Date()
const isLeap= (year) =>{
    return (year % 4 == 0 && year % 100 !=0 && year % 400 !=0) || (year %100 ==0 && year %400 == 0)
}

GetFebruaryDays = (year) =>{
    return isLeap(year) ? 29 :28
}

const generateCalendar = () =>{
    let currentday = new Date()
    let year = currentday.getFullYear()
    let month = currentday.getMonth()

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
    let first_day = new Date(year,month,1)
    for (let i =0 ; i <= months[month] + first_day.getDay() - 1 ; i++){
        let day = document.createElement("div")
        if(i>= first_day.getDay()){
            day.classList.add("calendar_day")
            day.innerHTML = i - first_day.getDay() +1
        }
        
    }
}

console.log(day.getMonth())

console.log(months[4].name)


const month_name = document.getElementById("month_name")

month_name.innerHTML=months[4].name
console.log(month_name)
