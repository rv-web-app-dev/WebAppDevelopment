/*
 This function checks for the occurance of the character a and b in a sentence with 
 distance between a and b being 3 characters.
*/
let sentence = 'Laurauibrooks';
let offset = 3;
let check = function (element, index, array) {
    if (Math.abs(element.charCodeAt(0) - sentence.charCodeAt(index + offset)) === 1) return true;
}

function ABCheck(str) {
    return str.split('').some(check);
}

console.log(ABCheck(sentence));

// https://www.coderbyte.com/editor/guest:AB%20Check:JavaScript
