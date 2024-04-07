function decimalMultiplication(num1: number , num2: number): number {
    let multiplyDecimal = (num1 * num2) * 100
    return Math.round(multiplyDecimal) / 100;
}
console.log(decimalMultiplication(0.6, 0.12)); //output : 0.07
