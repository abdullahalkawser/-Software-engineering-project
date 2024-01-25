const product = [
    {id:1,name : 'phone', brand: 'oppo',price : 4590, color:'red'},
    {id:1,name : 'phone', brand: 'oppo',price : 45230, color:'red'},
    {id:1,name : 'phone', brand: 'oppo',price : 4345, color:'red'},
    {id:1,name : 'phone', brand: 'oppo',price : 4545, color:'red'},
    {id:1,name : 'phone', brand: 'oppo',price : 4500, color:'red'}
]

// const result = product.map(pro => pro.brand)// array retrn korbe  
// console.log(result)
// const result1 = product.map(pro => pro.price)
// console.log(result1)

// forEach array retrn korbe nhhh

// product.forEach(pro=> console.log(pro.id))
// product.forEach(pro=> console.log(pro.name))


// filter   condition fullfil lorbe taratri  pabe and array retrun korebe 

// const cheap = product.filter(p=> p.price >= 5000)
// console.log(cheap)
// const cheaps = product.filter(p=> p.name.includes('o'))
// console.log(cheaps)


// find condition fullfil korbe taratri  pabe and array retrun korebe  1st value ta dibe 


const cheaps = product.find(p=> p.name.includes('o'))
console.log(cheaps)










