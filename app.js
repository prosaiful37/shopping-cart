document.getElementById('case-plus').addEventListener('click', function(){

    // input filed value add
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1 ;
    
})