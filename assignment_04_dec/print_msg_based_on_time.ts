const msgPrompt = require("prompt-sync")();

function printGreetingByTime(hour: number): string {
    let greeting: string;

    if (hour >= 0 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return greeting;
}

const hour: number = parseInt(msgPrompt("Enter hour: "));

console.log(printGreetingByTime(hour)); 
