document.getElementById('login-btn').addEventListener('click', function(){
    // get the number input
    const numberInput = document.getElementById('number-input')
    const mobileNumber = numberInput.value;
    if (isNaN(mobileNumber)) {
    alert("Please enter only numbers");
    return;
}
    

    // get pin input
    const pinInput = document.getElementById('pin-input')
    const pin = pinInput.value;

    if(mobileNumber == '01950570705' && pin == '1234'){
        alert('login sucsess')

        window.location.assign("home.html")
    }else{
        alert('login faield')
    }

})