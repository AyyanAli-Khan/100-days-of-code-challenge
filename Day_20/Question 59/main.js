"use strict";
function adderFunction(adder) {
    return (number) => number + adder;
}
let add6 = adderFunction(5);
console.log(add6(15)); //output : 20
