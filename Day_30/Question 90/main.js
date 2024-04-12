"use strict";
// Function check that given value is not a number (NaN).
function checkValueIsNaN(value) {
    return isNaN(value);
}
console.log(checkValueIsNaN("Ayyan")); // output : false because "Ayyan" is not a number 
console.log(checkValueIsNaN(12)); // output : true because 12 is  a number 
