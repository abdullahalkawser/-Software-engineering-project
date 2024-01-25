
// const arrays = [2,3,4,5,67,8]

const abdullh ={
    name: 'abdullah al kawser',
    job: 'software engineer',
    sub: 'CSE'
 }
// templet string 
 const output = `my name is ${abdullh.name} my occuaption is ${abdullh.job} and my age is ${arrays[4]}`
 console.log(output)

 // arrow function 

 // arrow function

 const getfifty = ()=>55 // no peremitter
 const oneperamittr = num => num +2
 const even = n =>n%2==0
 const maltipalePeramiter = (x,y,z)=> x+ y+ z
 const domath = (x ,y )=>{
    const result = x+y
    return result 
 }


 // spreed oparetor 
 const arrays = [2,3,4,5,67,8]
 const newnumber = [...arrays] // new array from older array 

 const current = [...arrays]

 arrays.push(90)
 arrays.push(90)
 arrays.push(90)

 console.log(arrays)
 console.log(newnumber)
 console.log(newnumber) 