const persons =[

 {name:"Nurkadyr",age:24},
 { name:"Asan",age:23 },
 { name:"Uson",age:22 },
 { name:"Aman",age:21 },
 { name:"Askar", age:1 }
]
const filterF = (person) =>{
    if(person.name ==="Uson" && person.age===17 ){
        return true
    } else{
        return false
    }
}

const index = persons.findIndex(filterF)
console.log(index);