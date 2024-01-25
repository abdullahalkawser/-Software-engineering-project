

// button and input values

document.getElementById('depositbtn').addEventListener('click', function () {
    const depositAmountInput = document.getElementById('depositamout');
    const newDepositAmount = parseFloat(depositAmountInput.value);
    
// deposit values

    const depositTotalElement = document.getElementById('depositetotal');
    const previousDepositText = depositTotalElement.innerText;
    const currentDeposit = parseFloat(previousDepositText) + newDepositAmount;
    depositTotalElement.innerText = currentDeposit;



    // Update the total balance
    const totalBalance = document.getElementById('total');
    const totalBalanceText = totalBalance.innerText;
    const currentTotal = parseFloat(totalBalanceText) + newDepositAmount; // Add the new deposit amount to the total balance
    totalBalance.innerText = currentTotal;

    depositAmountInput.value = ''; // Clear the input field
});
