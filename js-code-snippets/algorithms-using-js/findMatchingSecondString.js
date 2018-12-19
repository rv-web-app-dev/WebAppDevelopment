"use strict";

function secondIndex(text, symbol) {
    // returns the second index of a symbol in a given text

    // your code here

    let firstMatchIndex = text.indexOf(symbol);
    if (firstMatchIndex === -1) return undefined;
    let secondMatchIndex = text.indexOf(symbol, firstMatchIndex + 1);
    return secondMatchIndex === -1 ? undefined : secondMatchIndex;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example')
    console.log(secondIndex("sims", "s"))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(secondIndex("sims", "s"), 3)
    assert.equal(secondIndex("find the river", "e"), 12)
    assert.equal(secondIndex("hi", " "), undefined)
    assert.equal(secondIndex("hi mayor", " "), undefined)
    assert.equal(secondIndex("hi mr Mayor", " "), 5)

    console.log("You are awesome! All tests are done! Go Check it!");
}