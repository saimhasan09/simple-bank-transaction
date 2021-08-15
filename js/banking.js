//---------------------------- Deposit part --------------------

// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    //convert string to float
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
    //update deposit
    const depositTotal = document.getElementById('deposit-total');

    //convert string to float
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    // calculation for deposit
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // clear the deposit input field
    depositInput.value = '';


    // ------------------------------  balance part      --------------------

    // update account balance
    const balanceTotal = document.getElementById('balance-total');

     //convert string to float
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    //Balance calculation for deposit
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

})