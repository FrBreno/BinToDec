export function decimalInputValidation(str) {
    return !(/\D/).test(str) && str.length > 0;
}

export function convertDecimal(str) {
    
    if (decimalInputValidation(str)) {
        return parseInt(str).toString(2);
    }
    
    return 'Please enter a valid decimal value!';
}