const clPrompt = require("prompt-sync")();

const userTemperature: number = parseFloat(clPrompt("Enter the temperature: "));
const clothingSuggestion: string = suggestClothing(userTemperature);
console.log(clothingSuggestion);


function suggestClothing(temperature: number): string {
    if (temperature < 10) {
        return "Wear very warm clothes.";
    } else if (temperature >= 10 && temperature <= 20) {
        return "Wear a jacket or sweater.";
    } else {
        return "Wear light clothing.";
    }
}
