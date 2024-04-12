let numbers: number[] = [12, 89, 55, 67, 35, 22];

// here we use reduce() method to sum all number in array .
let sum: number = numbers.reduce((a: number, b: number): number => a + b)
console.log(sum);  // output : 280
