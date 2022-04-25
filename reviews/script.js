const reviews = [
    {
        "id":1,
        "name":"susan smith",
        "job":"web developer",
        "description":"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        "src":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    },
    {
        "id":2,
        "name":"anna johnson",
        "job":"web designer",
        "description":"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        "src":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
        "id":3,
        "name":"peter jones",
        "job":"intern",
        "description":"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        "src":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    },
    {
        "id":4,
        "name":"bill anderson",
        "job":"the boss",
        "description":"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        "src":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    },
];

const img = document.querySelector("#image")
const author = document.querySelector("#name")
const job = document.querySelector("#job")
const description = document.querySelector("#description")

const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const random = document.querySelector(".random")

let currentItem = 0;

window.addEventListener("DOMContentLoaded",()=>{
    const item = reviews[currentItem]
    img.src = item.src;
    author.innerHTML = item.name
    job.innerHTML = item.job
    description.innerHTML = item.description
})



prev.addEventListener("click",()=>{
    --currentItem<0 ? currentItem= reviews.length-1 : currentItem
    const item = reviews[currentItem]
    img.src = item.src;
    author.innerHTML = item.name
    job.innerHTML = item.job
    description.innerHTML = item.description
})

next.addEventListener("click",()=>{
    ++currentItem>reviews.length-1 ? currentItem= 0 : currentItem
    const item = reviews[currentItem]
    img.src = item.src;
    author.innerHTML = item.name
    job.innerHTML = item.job
    description.innerHTML = item.description
})

random.addEventListener("click",()=>{
    currentItem= Math.floor(Math.random()*reviews.length)
    console.log(currentItem)
    const item = reviews[currentItem]
    img.src = item.src;
    author.innerHTML = item.name
    job.innerHTML = item.job
    description.innerHTML = item.description
})