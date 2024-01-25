// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)


// siquencial vabe ai code run korbe

//synchronous

function one() {
    console.log('a')
    two()
    
}
function two() {
    console.log('B')
    three()

    
}
function three() {
    console.log('c')


    
}
// one()


// aSsynchronous vabe code run kiorebe
console.log("i")
setTimeout(()=>{
    console.log(' am A SoftWare Engineer')
},4000)
console.log('at software service and tecnology')


//

const data = async function getdata(geturl) {
    try {
        const res = await fetch(geturl)
        const data = await res.json()
        console.log(DataTransfer)
        
    } catch (error) {
        console.log(error)
        
    }
    
}

