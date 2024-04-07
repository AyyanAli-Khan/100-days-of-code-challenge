"use strict";
function swapValues() {
    let a = 5;
    let b = 10;
    console.log(`Before swaping a = ${a} and b = ${b}`);
    let temp = a;
    a = b;
    b = temp;
    console.log(`After swaping a = ${a} and b = ${b}`);
}
swapValues();
