const GroceryList=["bacon","list1","list2"]
const items = document.querySelector(".items")

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
}
window.addEventListener("load",()=>{
    showItems()
})