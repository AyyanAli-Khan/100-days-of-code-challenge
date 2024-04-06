let grade: number[] = [79, 92, 85, 68, 87];

// sum all values in grade array and divide them by number of values is array
let averageGrade = grade.reduce((a, b): number => a + b) / grade.length;

console.log(averageGrade); //output : 82.2
