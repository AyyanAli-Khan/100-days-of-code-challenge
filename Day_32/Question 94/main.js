"use strict";
let fruit = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruit);
// Store length of each item in fruits array in lengthArray by using map() method.
let lengthArray = fruit.map((item) => item.length);
console.log(lengthArray); // output : [ 5, 6, 6, 5 ]
