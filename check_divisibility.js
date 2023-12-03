"use strict";
const mPrompt = require("prompt-sync")();
const userNumber = parseInt(mPrompt("Enter a number: "));
const divisibilityResult = checkDivisibility(userNumber);
console.log(divisibilityResult);
function checkDivisibility(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Divisible by both 3 and 5";
    }
    else if (number % 3 === 0) {
        return "Divisible by 3";
    }
    else if (number % 5 === 0) {
        return "Divisible by 5";
    }
    else {
        return "Not divisible by 3 or 5";
    }
}
