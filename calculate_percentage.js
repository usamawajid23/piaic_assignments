"use strict";
const totalMarks = 500;
const obtainedMarks = 400;
const result = calculatePercentage(totalMarks, obtainedMarks);
console.log(`The percentage is: ${result}%`);
function calculatePercentage(totalMarks, obtainedMarks) {
    const percentage = (obtainedMarks / totalMarks) * 100;
    return percentage;
}
