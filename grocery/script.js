let GroceryList=["bacon","list1","list2"]
const items = document.querySelector(".items")
const addButton = document.querySelector(".add")
const clearButton = document.querySelector("#clear")

const showItems = () =>{
    const element = GroceryList.map((value,index)=>{
        return ` <li class="item" data-id="${index}">
                    <p>${value}</p>
                    <div class="btn-container">
                        <button class="editButton">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="deleteButton">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </li>`
    }) . join("")
    items.innerHTML = element

    const Allitems = items.querySelectorAll(".item")
    Allitems.forEach((item)=>{
        const editButton = item.querySelector(".editButton")
        editButton.addEventListener("click",(e)=>{
            const id= e.currentTarget.parentElement.parentElement.dataset.id
            const name = document.querySelector("#name")
            GroceryList[id]= name.value
            showItems() 
        })
        const deleteButton = item.querySelector(".deleteButton")
        deleteButton.addEventListener("click",(e)=>{
            const id= e.currentTarget.parentElement.parentElement.dataset.id
            GroceryList.splice(id,1)
            showItems() 
        })
    })
}
window.addEventListener("load",()=>{
    showItems()
})


addButton.addEventListener("click",(e)=>{
    e.preventDefault()
    const name = document.querySelector("#name")
    GroceryList.push(name.value)
    showItems()
})

clearButton.addEventListener("click",()=>{
    GroceryList=[]
    showItems()
})