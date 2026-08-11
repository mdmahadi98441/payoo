// document.getElementById('cashout-btn').addEventListener('click', function(){
//     const cashoutNumberInput = document.getElementById('cashout-input')
//     const cashoutNumber = cashoutNumberInput.value ;


//     const cashoutAmountInput = document.getElementById('cashout-amount')
//     const cashoutAmount = cashoutAmountInput.value;

//     const balanceAmount = document.getElementById('balance')
//     const balance = balanceAmount.innerText;

//     const newBalance = Number(balance) - Number(cashoutAmount)


//     if(newBalance < 0){
//         alert('Ivalid balance')
//         return;
//     }

//     const cashoutpinInput = document.getElementById('cashout-pin')
//     const pin = cashoutpinInput.value

//     if(pin === '1234'){
//         alert('cashout successfull')
//         balanceAmount.innerText = newBalance
//     }
//     else{
//         alert('Invalid Pin ')
//         return;
//     }
// })




document.getElementById('cashout-btn').addEventListener('click', function () {
    const cashoutNumber = getValueFromInput('cashout-input')

    if (cashoutNumber.length != '11') {
        alert('Please Chack Your Number')
        return
    }

    const cashoutAmount = getValueFromInput('cashout-amount')

    const cashoutBalance = document.getElementById('balance')
    const balance = cashoutBalance.innerText

    const newBalance = Number(balance) - Number(cashoutAmount)


    if (newBalance < 0) {
        alert('Invalid balance')
        return;
    }

    const pin = getValueFromInput('cashout-pin')


    if (pin === '1234') {
        alert('cashout successfull')
        cashoutBalance.innerText = newBalance

        const historyContainer = document.getElementById('history-container')

        const newDiv = document.createElement('div')

        newDiv.innerHTML = `<div id="history-card" class="p-3 bg-base-100 rounded-md">
             Cashout success ${cashoutAmount} TAKA from ${cashoutNumber}
            at ${new Date()}

        </div>`
        
        historyContainer.append(newDiv)
    }
    else {
        alert('invalid pin')
    }
})


