var btnToConvert = document.querySelector("#to-convert-button");

function inputValidate(str) {
    return !(/[^01]/).test(str) && str.length > 0;
}

function convertBin(str) {

    if(inputValidate(str)) {   
        return parseInt(str, 2);
    }

    alert('Digite um valor binário válido!');
    return "";
}

btnToConvert.addEventListener("click", (event) => {
    event.preventDefault();
    let converterForm = document.querySelector("#converter-form");
    
    converterForm.result.value = convertBin(converterForm.insertion.value);
});
