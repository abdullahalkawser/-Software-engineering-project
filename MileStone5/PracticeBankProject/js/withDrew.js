// document.getElementById('withdretbtn').addEventListener('click', function () {

//     const withdrwamoutfeild = document.getElementById('withdrwInpute')
//     const withdrwamout = parseFloat (withdrwamoutfeild.value)


//     const withdrewbalance = document.getElementById('withdewsbalance')

//     const withdrewbalancetext = withdrewbalance.innerText
//     const totalwithdre = parseFloat(withdrewbalancetext) + withdrwamout

//     withdrewbalance.innerText= totalwithdre

//     withdrwamoutfeild.value= ''


//     //  update total balance
// const totatbanacle = document.getElementById('total')
// const totalBalanceText = totatbanacle.innerText;
// const currentTotal = parseFloat(totalBalanceText) - totalwithdre;

// // Add the new deposit amount to the total balance
// totatbanacle.innerText = currentTotal;






// })








document.getElementById('withdretbtn').addEventListener('click', function () {
    // Get the new deposit amount and previous total deposit
    const newwithdrew = getInputValueById('withdrwInpute');
    const previousTotalwithdre = getinputVlueelement('withdewsbalance');

    // Calculate the new total deposit
    const totalWithdrw = previousTotalwithdre + newwithdrew;

    // Update the deposit total element
    setTextgetElementById('withdewsbalance', totalWithdrw);


    // total balance

    const totalbalance = getinputVlueelement('total');

    const totals = totalbalance - totalWithdrw


    setTextgetElementById('total', totals);

    

});