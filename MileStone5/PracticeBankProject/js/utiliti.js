function getInputValueById(inputid) {
    const inputfeild = document.getElementById(inputid)
    const inputfeildString = inputfeild.value
    const inputvalue = parseFloat(inputfeildString)
    inputfeild.value = ''
    return inputvalue
    
}

function getinputVlueelement(elementid) {
    const element = document.getElementById(elementid)
    const elementidString = element.innerText
    const value = parseFloat(elementidString)
    return value; 
    
}


function setTextgetElementById(elementId, newValue) {
    const textElemnt = document.getElementById(elementId)
    textElemnt.innerText = newValue
    
}