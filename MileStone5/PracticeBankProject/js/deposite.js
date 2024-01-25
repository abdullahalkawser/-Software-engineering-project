// document.getElementById('depositbtn').addEventListener('click', function () {

//     const depositamoutfeild = document.getElementById('depositamout')
//     const depositamoutfeildText = parseFloat (depositamoutfeild.value)



//   const depositinput = document.getElementById('depositetotal')
//   const depositinputtext = depositinput.innerText

//   const depositeTotal =  parseFloat(depositinputtext) + depositamoutfeildText


//  depositinput.innerText= depositeTotal

//  depositamoutfeild.value = ''


// //  update total balance
// const totatbanacle = document.getElementById('total')
// const totalBalanceText = totatbanacle.innerText;
// const currentTotal = parseFloat(totalBalanceText) + depositeTotal;

// // Add the new deposit amount to the total balance
// totatbanacle.innerText = currentTotal;




    
// })






document.getElementById('depositbtn').addEventListener('click', function () {
    // Get the new deposit amount and previous total deposit
    const newDeposit = getInputValueById('depositamout');
    const previousTotal = getinputVlueelement('depositetotal');

    // Calculate the new total deposit
    const totalDeposit = previousTotal + newDeposit;

    // Update the deposit total element
    setTextgetElementById('depositetotal', totalDeposit);


    // total balance

    const totalbalance = getinputVlueelement('total');

    const totals = totalbalance + totalDeposit


    setTextgetElementById('total', totals);

    

});