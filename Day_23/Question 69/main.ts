function divideAndRemainder( divisor: number,dividend: number): { quotient: number; remainder: number } {
    
    let remainder = dividend % divisor;
    let quotient = Math.floor(dividend / divisor);

    
    return { quotient, remainder };
}

//log
console.log(divideAndRemainder(2, 26)); // output = { quotient: 13, remainder: 0}
