document.getElementById('withdretbtn').addEventListener('click', function () {
    const withdrew = document.getElementById('withdrwInpute');
    const withdreValue = parseFloat(withdrew.value);

    const withdrewinput = document.getElementById('withdewsbalance');
    const withdrewinputvalue = parseFloat(withdrewinput.innerText);

    const newBalance = withdrewinputvalue + withdreValue;
    withdrewinput.innerText = newBalance;


    withdrew.value = ''; // Clear the input field



    const totalBalance = document.getElementById('total');
    const totalBalanceText = totalBalance.innerText;
    const currentTotal = parseFloat(totalBalanceText) -  withdreValue; // Add the new deposit amount to the total balance
    totalBalance.innerText = currentTotal;


    withdrew.value = ''; // Clear the input field
});
