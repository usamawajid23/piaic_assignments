"use strict";
const clPrompt = require("prompt-sync")();
const userTemperature = parseFloat(clPrompt("Enter the temperature: "));
const clothingSuggestion = suggestClothing(userTemperature);
console.log(clothingSuggestion);
function suggestClothing(temperature) {
    if (temperature < 10) {
        return "Wear very warm clothes.";
    }
    else if (temperature >= 10 && temperature <= 20) {
        return "Wear a jacket or sweater.";
    }
    else {
        return "Wear light clothing.";
    }
}
