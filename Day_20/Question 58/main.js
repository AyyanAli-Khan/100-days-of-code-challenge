"use strict";
function getAverageScore(...score) {
    let totalScore = score.reduce((a, b) => a + b);
    return totalScore / score.length;
}
console.log(getAverageScore(45, 78, 89, 90));
