
function updatePhoneNUmber(isIncrease){
    const phoneNumber = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumber.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1; 
    }else{
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumber.value = newPhoneNumber;

    return newPhoneNumber;
}

function totalPhonePrice(newPhoneNumber){
    const totalPrice = newPhoneNumber * 1219;
    const totalPhone = document.getElementById('phone-total');
    totalPhone.innerText = totalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNUmber(true);

    totalPhonePrice(newPhoneNumber);
    calculateSubTotal();


})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNUmber(false);

    totalPhonePrice(newPhoneNumber);

    calculateSubTotal();

})