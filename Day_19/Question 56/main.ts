let mixedArray = ["potatao", true, "onion", 2, false, "tomato", 6];

let strArray = mixedArray.filter( item =>  typeof item === "string")

console.log(strArray); //output : [ 'potatao', 'onion', 'tomato' ]

