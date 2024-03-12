let number: number[] =[1,2,3,4,5,6,7,8,9];

number.forEach((currentNumber: number) => {
        
    if (currentNumber == 1) {
        console.log(currentNumber + "st");
    }
    else if (currentNumber == 2) {
        console.log(currentNumber + "nd");
    }
    else if (currentNumber == 3) {
        console.log(currentNumber + "rd");
    }
    else if (currentNumber >= 4) {
        console.log(currentNumber + "th");
    }
});
