"use strict";

/*
Problem Statement:: returns a corrected sentence which starts with capital letter and ends with dot.
*/
function correctSentence(text) {
    text = text.charAt(0).toUpperCase().concat(text.substr(1));
    if(!text.endsWith('.')){
        return text.concat('.');
    } 
    return text;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    assert.equal(correctSentence("welcome to New York"), "Welcome to New York.")
    
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}