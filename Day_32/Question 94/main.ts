let fruit: string[] = ["Apple", "Banana", "Orange", "Mango"];

console.log(fruit);

// Store length of each item in fruits array in lengthArray by using map() method.
let lengthArray: number[] = fruit.map((item: string): number => item.length); 
console.log(lengthArray); // output : [ 5, 6, 6, 5 ]
