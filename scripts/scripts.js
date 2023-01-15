const btnsToConvert = document.querySelectorAll('button.to-convert-button');
const btnDecimalForBinary = document.querySelector('#decimal-for-binary-button');
const btnBinaryForDecimal = document.querySelector('#binary-for-decimal-button');

function binaryInputValidation(str) {
    return !(/[^01]/).test(str) && str.length > 0;
}

function convertBin(str) {
    str = str.split(" ").join("");

    if(binaryInputValidation(str)) {   
        return parseInt(str, 2);
    }

    return 'Digite um valor binário válido!';
}

function decimalInputValidation(str) {
    return !(/\D/).test(str) && str.length > 0;
}

function convertDecimal(str) {
    
    if (decimalInputValidation(str)) {
        return parseInt(str).toString(2);
    }
    
    return 'Digite um valor decimal válido!';
}

function changeDisplayStyle(id01, id02) {
    document.querySelector(id01).style.display = 'none';
    document.querySelector(id02).style.display = 'block';
}

btnDecimalForBinary.addEventListener('click', (event) => {
    event.preventDefault();
    changeDisplayStyle('#binary-converter-for-decimal', '#decimal-converter-for-binary');
});

btnBinaryForDecimal.addEventListener('click', (event) => {
    event.preventDefault();
    changeDisplayStyle('#decimal-converter-for-binary', '#binary-converter-for-decimal');
});

for(let indForm = 0; indForm <= 1; indForm++) {   

    btnsToConvert[indForm].addEventListener('click', (event) => {
        event.preventDefault();
        let converterForm = document.querySelectorAll('form.converter-form')[indForm];
        
        if (indForm == 0) {
            converterForm.result.value = convertBin(converterForm.insertion.value);
        } else {
            converterForm.result.value = convertDecimal(converterForm.insertion.value);
        }
    });
}