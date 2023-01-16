export function binaryInputValidation(str) {
    return !(/[^01]/).test(str) && str.length > 0;
}

export function convertBin(str) {
    str = str.split(" ").join("");
    
    if(binaryInputValidation(str)) {   
        return parseInt(str, 2);
    }
    
    return 'Please enter a valid binary value!';
}