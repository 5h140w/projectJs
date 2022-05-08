const day = new Date()
const months=[
    {"name":"January" , "nd":31}, 
    {"name":"February", "nd":28} , 
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
console.log(day.getMonth())

console.log(months[4].name)


const month_name = document.getElementById("month_name")

month_name.innerHTML=months[4].name
console.log(month_name)
