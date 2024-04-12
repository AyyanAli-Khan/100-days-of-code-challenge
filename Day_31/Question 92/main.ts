function popLastElement(array: any[]){
    array.pop(); // delete last element from array using pop() method. 
    return array
}

let array = ["a","b","c","d"];
let array2 = [2, 5, 7, 8]
console.log(popLastElement(array)); // output : [ 'a', 'b', 'c' ]
console.log(popLastElement(array2)); // output : [ 2, 5, 7 ]