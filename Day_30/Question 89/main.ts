function convertStrIntoNumber(str: string) {
    return Number(str) 
}

let str1: string  = "123";
let str2: string = "34.8"; 

console.log(convertStrIntoNumber(str1)); // output : 123 with type number
console.log(convertStrIntoNumber(str2)); //output : 46.6 with type number