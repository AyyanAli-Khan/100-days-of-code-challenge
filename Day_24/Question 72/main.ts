function letAndConst() {
    let letmessage: string = "visible in only this function";
    const constmessage: string = "also visible only in this function ";
    console.log(letmessage);
    console.log(constmessage);

}

letAndConst();
console.log(letmessage); // gives an error beacuse let and const are braces scopes and they are local variables.
