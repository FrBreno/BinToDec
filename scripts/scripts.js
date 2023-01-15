const btnsToConvert = document.querySelectorAll('button.to-convert-button');
const btnDecimalForBinary = document.querySelector('#decimal-for-binary-button');
const btnBinaryForDecimal = document.querySelector('#binary-for-decimal-button');
const sections = document.querySelectorAll('main section[id]')

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

function activateMenuAtCurrentSection() {
    const checkpoint = window.scrollY + (window.innerHeight / 9.39) * 1.1;
    
    for (const section of sections) {
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= section.offsetTop;
        const checkpointEnd = checkpoint <= (section.offsetTop + section.offsetHeight);

        if (checkpointStart && checkpointEnd) {
        document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
        document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
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

window.addEventListener('scroll', () => activateMenuAtCurrentSection())