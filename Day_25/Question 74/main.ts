function swapValues() {
    let a: number = 5;
    let b: number = 10;

    console.log(`Before swaping a = ${a} and b = ${b}`);

    let temp: number = a;
    a = b

    b = temp
    console.log(`After swaping a = ${a} and b = ${b}`);
}

swapValues(); // output : Before swaping a = 5 and b = 10
//                        After swaping a = 10 and b = 5