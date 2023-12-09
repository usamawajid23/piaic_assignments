const nmbrPrompt = require("prompt-sync")();

function checkNumberType(number: number): string {
    if (number > 0) {
        return "Positive";
    } else if (number === 0) {
        return "Zero";
    } else {
        return "Negative";
    }
}

const nmbr: number = parseInt(nmbrPrompt("Enter Number: "));
console.log(checkNumberType(nmbr));
