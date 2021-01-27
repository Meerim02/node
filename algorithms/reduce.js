// praducts.reduce((ans,item,index)=>{
//     console.log(ans,item)
//     return ans+item.price
// })
const numbers = [1,2,3,12,3,5]
numbers.reduce((ans,item)=>{
    return ans+item
})
console.log(numbers.reduce((ans,item)=>{
    return ans+item
}))