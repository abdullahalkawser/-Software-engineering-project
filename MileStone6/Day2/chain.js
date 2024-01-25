// const data = [{id: 43675, name : 'abdullah al kawser' },
// {id: 43675, name : 'abdullah al kawser' },
// {id: 43675, name : 'abdullah al kawser' },
// {id: 43675, name : 'abdullah al kawsers' }
// ]

// console.log(data[3].name)

// const product = {
//     count: 5000,
//     data:[
//         {id: 43675, name : 'lenovo' ,price: 90},
//         {id: 43675, name : 'apple' ,price: 80},
//         {id: 43675, name : 'hp' ,price: 760}

//     ]
// }





// console.log(product.data[2].price)




// nested object

// optional chain  console.log(user.addresse.street?.secceon)

const user = {
    name: 'abdullah al kawser',
    addresse:{
        street:{
            fist: 'dhaka proibag ',
            secceon: 'national poribag ',
            third: 'dhanmondi'

        },
        city: 'dhaka'
    }
}
const user2 = {
    name: 'abdullah al kawser',
    addresse:{
        fist: 'dhaka proibag ',
        secceon: 'national poribag sdf',
        third: 'dhanmondi',
        city: 'dhaka'
    }
}
console.log(user.addresse.street?.secceon)
console.log(user2.addresse.street?.secceon)

