let favoriteFruits : string[] = ["Orange", "Banana", "Strawberry"];

let indexOfBanana = favoriteFruits.indexOf("Banana");
console.log(`Index of banana in favoriteFruits array is : ${indexOfBanana}`);

favoriteFruits[indexOfBanana] = "Mango"; // replace "Banana" with "Mango".
console.log(favoriteFruits); // output : [ 'Orange', 'Mango', 'Strawberry' ].
