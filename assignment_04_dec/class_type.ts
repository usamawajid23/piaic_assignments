let ctPrompt = require("prompt-sync")();
function printStudyName(classNumber: number): string {
    let studyName: string;

    switch (classNumber) {
        case 1:
            studyName = "Playgroup";
            break;
        case 5:
            studyName = "Middle";
            break;
        case 10:
            studyName = "Matric";
            break;
        
        default:
            studyName = "Invalid class number";
    }

    return studyName;
}

const classType: number = parseInt(ctPrompt("Enter class number: "));

console.log(printStudyName(classType)); 
