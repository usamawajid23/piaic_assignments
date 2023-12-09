"use strict";
let ctPrompt = require("prompt-sync")();
function printStudyName(classNumber) {
    let studyName;
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
const classType = parseInt(ctPrompt("Enter class number: "));
console.log(printStudyName(classType));
