document.getElementById('pay-btn').addEventListener('click', function(){
    const payBank = getValueFromInput('pay-bank-name')
    if(payBank == 'Select Bank'){
        alert('Please Select a Bank')
        return
    }

    const payNumber = getValueFromInput('pay-account-number')
    if(payNumber.length != 11){
        alert('Invalid Number')
        return
    }

    const payAmount = getValueFromInput('pay-amount')

    const newBalance = getBalance() - Number(payAmount)
    if(newBalance < 0 ){
        alert('Invalid amount')
        return
    }

    const pin = getValueFromInput('pay-pin')
    if(pin == '1234'){
        alert(`your paymant is success ${payAmount} TAKA to ${payNumber} at${new Date()}`)
        setBalance(newBalance)

        const historyContainer = document.getElementById('history-container')

        const newDiv = document.createElement('div')

        newDiv.innerHTML = `<div id="history-card" class="p-3 bg-base-100 rounded-md">
        your paymant is success ${payAmount} TAKA to ${payNumber} at${new Date()}
             

        </div>`
        historyContainer.append(newDiv)
    }
    else{
        alert('Invalid pin ')
    }
})