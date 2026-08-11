// document.getElementById('add-money-btn').addEventListener('click', function () {
//     const bankName = getValueFromInput('account-name')
//     if (bankName == 'Select Bank') {
//         alert('Please Select a bank')
//         return;
//     }

//     const accountNumber = getValueFromInput('add-money-account-number')
//     if (accountNumber.length != 11) {
//         alert('Invalid Account Number')
//         return;
//     }

//     const addAmount = getValueFromInput('add-money-amount')
//     if (addAmount > 10000) {
//         alert('maximum amount to add 10,000')
//         return
//     } else if (addAmount <= 0) {
//         alert('minimum amount to add 1 taka')
//         return
//     }

//     const newBalance = getBalance() + Number(addAmount)

//     const pin = getValueFromInput('add-money-pin')

//     if (pin == '1234') {
//         alert(`Add Money success form ${bankName} 
//         account no.${accountNumber} 
//         at ${new Date()}`)
//         setBalance(newBalance)

//          const historyContainer = document.getElementById('history-container')

//         const newDiv = document.createElement('div')

//         newDiv.innerHTML = `<div id="history-card" class="p-3 bg-base-100 rounded-md">
//              Add Money success form ${bankName} 
//              account no.${accountNumber} 
//              at ${new Date()}

            

            
//         </div>`
//         historyContainer.append(newDiv)

       

//     }
//     else {
//         alert("Invalid pin")
//         return;
//     }

// })



document.getElementById('add-money-btn').addEventListener('click',function(){
    const bankName = getValueFromInput('account-name')
    if(bankName == 'Select bank'){
        alert('please select a bank')
        return
    }

    const accountNumber = getValueFromInput('add-money-account-number')

    if(accountNumber.length != 11){
        alert('Invalid Account Number')
        return
    }



    const amountToAdd = getValueFromInput('add-money-amount')
     if (amountToAdd > 10000) {
        alert('maximum amount to add 10,000')
        return
    } else if (amountToAdd <= 0) {
        alert('minimum amount to add 1 taka')
        return
    }

    const newBalance = getBalance() + Number(amountToAdd)

    const pin = getValueFromInput('add-money-pin')

    if(pin == '1234'){
        alert('add money success')
        setBalance(newBalance)

        
         const historyContainer = document.getElementById('history-container')

        const newDiv = document.createElement('div')

        newDiv.innerHTML = `<div id="history-card" class="p-3 bg-base-100 rounded-md">
             Add Money success form ${bankName} 
             account no.${accountNumber} 
             at ${new Date()}

            

            
        </div>`
        historyContainer.append(newDiv)
    }
    else{
        alert('Invalid pin')
        return
    }
})