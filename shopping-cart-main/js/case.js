
function updateCaseNumber(isIncrease){
    const caseInputField = document.getElementById('case-input-field');
    const caseInputString = caseInputField.value;
    const previousInput = parseInt(caseInputString);

    let newCaseNUmber; 

    if(isIncrease === true){
        newCaseNUmber = previousInput + 1;
    }else{
        newCaseNUmber = previousInput - 1;
    }

    caseInputField.value = newCaseNUmber;

    return newCaseNUmber;

}

function caseTotalPrice(newCaseNUmber){
    const caseTotalPrice = newCaseNUmber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('case-plus-btn').addEventListener('click',
function(){
    const newCaseNUmber = updateCaseNumber(true);

    caseTotalPrice(newCaseNUmber);
    calculateSubTotal();

})

document.getElementById('case-btn-minus').addEventListener('click',
function(){
    const newCaseNUmber = updateCaseNumber(false);

    caseTotalPrice(newCaseNUmber);
    calculateSubTotal();
})