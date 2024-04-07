"use strict";
function divideAndRemainder(divisor, dividend) {
    let remainder = dividend % divisor;
    let quotient = Math.floor(dividend / divisor);
    return { quotient, remainder };
}
//log
console.log(divideAndRemainder(2, 26)); // output = { quotient: 3, remainder: 1 }
