"use strict";
const wPrompt = require("prompt-sync")();
const weekNumber = parseInt(wPrompt("Enter the week: "));
// Example usage:
console.log(printDayOfWeek(weekNumber));
function printDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Weekend";
            break;
        default:
            dayName = "Invalid day";
    }
    return dayName;
}
