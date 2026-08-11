function getValueFromInput(id){
const input = document.getElementById(id)
const value = input.value
console.log(id, value)
return value
}


// get balance

function getBalance (){
 const balanceElement = document.getElementById('balance')
 const balance = balanceElement.innerText
 return Number(balance)
}

// set balance
function setBalance (value){
     const balanceElement = document.getElementById('balance')
     balanceElement.innerText = value
}



function showOnly (id){
    console.log('show only clicked')
    const addMoney =   document.getElementById('add-money')
    const cashout =   document.getElementById('cashout')
    const history = document.getElementById('history')
    const transferMoney = document.getElementById('transfer-money')
    const getbonus = document.getElementById('bonus')
    const paybill = document.getElementById('pay-bill')


    addMoney.classList.add('hidden')
    cashout.classList.add('hidden')
    history.classList.add('hidden')
    transferMoney.classList.add('hidden')
    getbonus.classList.add('hidden')
    paybill.classList.add('hidden')

    const selected = document.getElementById(id)
    selected.classList.remove('hidden')
}