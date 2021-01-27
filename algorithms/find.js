// const products = [
//     {name:"mandarin",price:145},
//     {name:"pamidor",price:250},
//     {name:"kivi",price:20},
//     {name:"badyryn",price:15},
//     {name:"kapusta",price:20},
// ]
// const products = products.find((item)=> item.name ==="badyryn" && item.price === 15)
// console.log(products)
const cars = [
    {marka:"bmv",year:2001},
    {marka:"honda",year:2003},
    {marka:"tayota",year:2004},
    {marka:"mers",year:2001},
    {marka:"audi",year:2005},

]
const car = cars.find((item)=>item.marka === "tayota" )
console.log(car.year);