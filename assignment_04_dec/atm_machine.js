"use strict";
const atmPrompt = require("prompt-sync")();
const correctAccountNumber = "123456";
const correctPin = "7890";
let balance = 1000; // Assuming an initial balance
function withdrawAmount(accountNumber, pin, amount) {
    if (accountNumber === correctAccountNumber && pin === correctPin) {
        if (balance >= amount) {
            balance -= amount;
            return `Withdrawal successful. \nRemaining balance: ${balance}`;
        }
        else {
            return "Insufficient balance";
        }
    }
    else if (accountNumber !== correctAccountNumber) {
        return "Incorrect account number";
    }
    else {
        return "Incorrect PIN";
    }
}
const accountNumber = parseInt(atmPrompt("Enter account number: "));
const atmPin = parseInt(atmPrompt("Enter correct atm pin: "));
const amount = parseInt(atmPrompt("Enter amount to withdraw: "));
console.log(withdrawAmount(accountNumber.toString(), atmPin.toString(), amount));
