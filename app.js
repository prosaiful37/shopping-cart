// common function update input value
function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber  = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total
    totalCalculate();
}
// total and subtotal function
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function totalCalculate(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
    

}

//phoen handle inceas decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone' , 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone' , 1219, false);
});



// handle case incresing decrease event
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});
// case minuse 
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});