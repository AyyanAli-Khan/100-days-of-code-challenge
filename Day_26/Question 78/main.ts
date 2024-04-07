// function declaration 
function square(num: number): number {
    return num * num;
}


// fuction expression 
let squareExpression = function (num: number): number {
    return num * num;
}

console.log(square(4));// output : 16
console.log(squareExpression(4)); // output : 16


