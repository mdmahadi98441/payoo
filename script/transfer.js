document.getElementById('transfer-btn').addEventListener('click', function(){
    const transferNumber = getValueFromInput('transfer-input')
    if(transferNumber.length != 11){
        alert('Invalid Number')
        return
    }

    const transferAmount = getValueFromInput('transfer-amount')
    if(transferAmount < 0){
        alert('Invalid Amount')
        return
    }

    const newbalance = getBalance() - Number(transferAmount)

    const pin = getValueFromInput('transfer-pin')

    if(pin == '1234'){
        alert(`Transfer Money Success ${transferAmount} to ${transferNumber} ${new Date()}`)
        setBalance(newbalance)

        const historyContainer = document.getElementById('history-container')

        const newDiv = document.createElement('div')

        newDiv.innerHTML = `<div id="history-card" class="p-3 bg-base-100 rounded-md">
             Transfer Money Success ${transferAmount} TAKA to ${transferNumber} ${new Date()}

        </div>`
        
        historyContainer.append(newDiv)
    }else{
        alert('Invalid pin')
        return
    }
})