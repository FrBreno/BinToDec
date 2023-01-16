import mobileNavbar from "./nav/mobileNavbar.js";
import activateMenuAtCurrentSection from "./nav/animatedNav.js";
import { convertBin } from "./converter/convertBinary.js";
import { convertDecimal } from "./converter/convertDecimal.js";

const btnsToConvert = document.querySelectorAll('button.to-convert-button');
const btnDecimalForBinary = document.querySelector('#decimal-for-binary-button');
const btnBinaryForDecimal = document.querySelector('#binary-for-decimal-button');

function changeDisplayStyle(id01, id02) {
    document.querySelector(id01).style.display = 'none';
    document.querySelector(id02).style.display = 'block';
}

/* CONVERTER */

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

/* NAV ANIMATION */
window.addEventListener('scroll', () => activateMenuAtCurrentSection());

/* RESPONSIVE NAV */
mobileNavbar('.mobile-menu', '.nav-list', '.nav-list li');