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

function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


export {
    makeId,
    capitalizeFirstLetter,
    camelCaseToString,
    capitalizeAllLetters,
    isNumber,
}