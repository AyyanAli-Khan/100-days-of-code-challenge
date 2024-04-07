"use strict";
function letAndConst() {
    let letmessage = "visible in only this function";
    const constmessage = "also visible only in this function ";
    console.log(letmessage);
    console.log(constmessage);
}
letAndConst();
// console.log(letmessage); // gives error beacuse let and const are braces scopes 
