"use strict";
// This function check that word "JavaScript" is exist in a given string and return true or false.
function checkWordInString(string) {
    let decision = string.includes("JavaScript") ? true : false;
    return decision;
}
console.log(checkWordInString("JavaScript is a programming language")); //output : true
