// import { reverse } from "dns";

let places_name: string[] = ["Swiss Alps","Hunza Valley","Singspore","Malaysia","Qatar"];

console.log("Array in original condition : ",places_name);

let places_name_copy: string[] = [...places_name]

console.log("Array in alphabetical order :",[...places_name].sort());

console.log("Array in original condition : ",places_name);

console.log("Array in reverse alphabetical order :",[...places_name].reverse());


console.log("Array in original condition : ",places_name);

places_name.reverse();

console.log("Reverse order of Array : ",places_name);

places_name.reverse();

console.log("Array in back to its original condition : ",places_name);

places_name.sort()

console.log("Array in alphabetical order :",places_name)

places_name.reverse();

console.log("Array in reverse alphabetical order :",places_name);