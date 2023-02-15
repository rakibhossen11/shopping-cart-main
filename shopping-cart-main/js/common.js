function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const totalElement = parseInt(elementString);
    return totalElement;
}

function setTextElementById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal; 
    setTextElementById('sub-total',currentSubTotal); 

    // calculate tex
    const taxString = (currentSubTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    setTextElementById('total-tax',tax);

    // final amount
    const finalTotal = currentSubTotal + tax;
    setTextElementById('total',finalTotal);
}