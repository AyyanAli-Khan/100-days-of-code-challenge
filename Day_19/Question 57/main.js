"use strict";
let grade = [79, 92, 85, 68, 87];
let averageGrade = grade.reduce((a, b) => a + b) / grade.length;
console.log(averageGrade);
