// declaretion function 

// function name(num, num1) {
//     return num + num1
    
// }

// const names = name(3, 5)
// console.log(names)


//function expresion


// const expretiony = function(num, num1) {
//     return num + num1
    
// }

// const names = expretiony(3, 10)
// console.log(names)


// arrow function

// const  functionofarrow = (a,b) =>  a+b
// const names = functionofarrow(13, 10)
// console.log(names)



// no paramitter

const pis = () =>Math.PI
console.log(pis())

// single paramitter

// const getnuimber = number => number[2]
// const result = getnuimber([5,3,4,5,])
// console.log(result)

// maltipale paramiter

const domath = (x,y,z) =>{
    const sum = x+y+z
    const malt = x*y*z
    const result = sum + malt
    return result
}
const sum = domath(2,3,4)
console.log(sum)