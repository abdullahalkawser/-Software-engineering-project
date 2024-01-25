// asychoronpous vabe kaj korbe 




const getData = new Promise((resolve,reject)=>{
    const num = Math.random() *10
    console.log(num)
    if (num < 4) {
            resolve(6786727)
        
    } 
    else{
        
        reject('no data is avilable ')

    }


})
getData.then(data =>console.log(data +4) )
.catch( err =>console.error(err))