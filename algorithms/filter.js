const products = [
    {name:"mandarin",price:145},
    {name:"pamidor",price:250},
    {name:"kivi",price:20},
    {name:"badyryn",price:15},
    {name:"kapusta",price:20},
]
const cheapProducts = products.filter((item)=> item.price < 70)
console.log(cheapProducts.length) 