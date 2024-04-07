"use strict";
// function declaration 
function square(num) {
    return num * num;
}
// fuction expression 
let squareExpression = function (num) {
    return num * num;
};
console.log(square(4)); // output : 16
console.log(squareExpression(4)); // output : 16
