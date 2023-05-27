function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function capitalizeAllLetters(string) {
    return string.replace(/\b\w/g, l => l.toUpperCase())
}
function camelCaseToString(str) {
    let convertedStr = str.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`);
    convertedStr = capitalizeAllLetters(convertedStr)
    return convertedStr
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


export {
    capitalizeFirstLetter,
    camelCaseToString,
    capitalizeAllLetters,
    isNumber,
}