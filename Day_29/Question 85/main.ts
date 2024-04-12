function findText(sentence: string): number {
    return sentence.indexOf("code");
}
console.log(findText("This code is easy to understand")); //output : 5 which is index of word "code".
console.log(findText("TypeScript is a programming language")); // output : -1 because word "code" is not present in sentence.
