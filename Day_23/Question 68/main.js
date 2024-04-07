"use strict";
function decimalMultiplication(num1, num2) {
    let multiplyDecimal = (num1 * num2) * 100;
    return Math.round(multiplyDecimal) / 100;
}
console.log(decimalMultiplication(0.6, 0.12));
