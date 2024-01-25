function calculateArea() {
    const inputField = document.getElementById('base')
    const inputFieldtext = inputField.value
    const base = parseFloat(inputFieldtext)
    // console.log(base);

    


    const inputheight = document.getElementById('height')
    const inputFieldheighttext = inputheight.value
    const baseheight = parseFloat(inputFieldheighttext)
    // console.log(baseheight);


    const total =  0.5 * base * baseheight

    const inputareas = document.getElementById('areas')

    inputareas.innerText = total

    areas

    console.log(total);
}


/// calculateArearectangle

function calculateArearectangle(){

    const inputwitd = document.getElementById('width')
    const inputwitdtext = inputwitd.value
    const width = parseFloat(inputwitdtext)

    // console.log(base)



    const inputlength = document.getElementById('length')
    const inputlengthttext = inputlength.value
    const length = parseFloat(inputlengthttext)
    // console.log(baseheight)

    // validation input

    if (isNaN(width) || isNaN(length)) {
        alert('insert your number')
        return
        
    }


    const totalarearectaingle =  width * length

    const inputareasrectailgle = document.getElementById('rectaigle')

    inputareasrectailgle.innerText = totalarearectaingle

  

    // console.log(totalarearectaingle);




    
}


function calculateParalalaArea() {
    const base = getInputValueById('bases')
    console.log(base)

    const hight = getInputValueById('hight')
    console.log(hight)

    const parallelogram = base* hight
    // console.log(parallelogram)
    setTextgetElementById('parallelogramAria', parallelogram)

    addcalculator()


    
}

function calculateEllipseArea() {
    const a = getInputValueById('ellipsea')
    // console.log(base)

    const b = getInputValueById('ellipseb')
    // console.log(hight)

    const eleips = 3.1416 * a * b

    const decimal = eleips.toFixed(2)
    // console.log(parallelogram)
    setTextgetElementById('EllipseAria', decimal)
    
}




// shaer function

function getInputValueById(inputid) {
    const inputfeild = document.getElementById(inputid)
    const inputfeildString = inputfeild.value
    const inputvalue = parseFloat(inputfeildString)
    inputfeild.value = ''
    return inputvalue
    
}

// function getinputVlueelement(elementid) {
//     const element = document.getElementById(elementid)
//     const elementidString = element.innerText
//     const value = parseFloat(elementidString)
//     return value; 
    
// }


function setTextgetElementById(elementId, newValue) {
    const textElemnt = document.getElementById(elementId)
    textElemnt.innerText = newValue
    
}



function addcalculator(areaType, area) {
    console.log( areaType + "" + area)
    
}