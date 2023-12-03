const aPrompt = require("prompt-sync")();

const userAge: number = parseInt(aPrompt("Enter your age: "));
const ageCategory: string = determineAgeCategory(userAge);
console.log(`You are a ${ageCategory}.`);




function determineAgeCategory(age: number): string {
    if (age >= 0 && age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Adult";
    }
}