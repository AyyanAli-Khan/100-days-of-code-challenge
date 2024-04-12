//function return an array of number greater than 10.
function filterArray(array: number[]){
    let filteredArray: number[] = array.filter((num: number) =>  num > 10);
    return filteredArray
}

let number: number[] = [12, 5, 6, 50, 8, 45, 70, 2 ];

console.log(filterArray(number)); // output : [ 12, 50, 45, 70 ]
