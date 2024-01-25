function ages() {
    const agefild = document.getElementById('age')
const agetext = agefild.value
console.log(agetext)
const errore = document.getElementById('error')


try {
    const age = parseInt(agetext)
    if(isNaN(age)){
        throw 'plesase enter a number'
    }
    else if(age <14){
        throw 'bacca is not allowd'

    }

    errore.innerHTML= ''
}

 catch (error) {
    console.log('eror', error)

    errore.innerHTML= ' some thinmg is wrong'

    
}
finally{
    console.log('testing is all done ')
}
}


