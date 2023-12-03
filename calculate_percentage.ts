const totalMarks: number = 500;
const obtainedMarks: number = 400;
const result: number = calculatePercentage(totalMarks, obtainedMarks);
console.log(`The percentage is: ${result}%`);


function calculatePercentage(totalMarks: number, obtainedMarks: number): number {
    const percentage: number = (obtainedMarks / totalMarks) * 100;
    return percentage;
}