// This function check that word "JavaScript" is exist in a given string and return true or false.
function checkWordInString(string: string): boolean {
    let decision: boolean = string.includes("JavaScript")?  true : false;
    return decision
}
console.log(checkWordInString("JavaScript is a programming language")); //output : true
