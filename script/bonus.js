document.getElementById('bonus-btn').addEventListener('click', function () {

    const bonus = Number(300)

    const newBalance = getBalance() + bonus;

    const coupon = getValueFromInput('bonus-input')
    if (coupon == 'mahadi-1234') {
        alert('your coupon is success')
        setBalance(newBalance)

        const historyContainer = document.getElementById('history-container')

        const newDiv = document.createElement('div')

        newDiv.innerHTML = `<div id="history-card" class="p-3 bg-base-100 rounded-md">
             bonus success  ${bonus} TAKA
             
             at ${new Date()}

        </div>`
        historyContainer.append(newDiv)

    }
})                           