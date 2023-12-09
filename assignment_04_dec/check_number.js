"use strict";
const nmbrPrompt = require("prompt-sync")();
function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    }
    else if (number === 0) {
        return "Zero";
    }
    else {
        return "Negative";
    }
}
const nmbr = parseInt(nmbrPrompt("Enter Number: "));
console.log(checkNumberType(nmbr));
