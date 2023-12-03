"use strict";
const aPrompt = require("prompt-sync")();
const userAge = parseInt(aPrompt("Enter your age: "));
const ageCategory = determineAgeCategory(userAge);
console.log(`You are a ${ageCategory}.`);
function determineAgeCategory(age) {
    if (age >= 0 && age <= 12) {
        return "Child";
    }
    else if (age >= 13 && age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
