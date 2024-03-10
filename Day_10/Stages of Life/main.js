"use strict";
let ageInYears = 20;
if (ageInYears < 2) {
    console.log("You are a baby.");
}
else if (ageInYears >= 2 && ageInYears < 4) {
    console.log("You are a toddler.");
}
else if (ageInYears >= 4 && ageInYears < 13) {
    console.log("You are a kid.");
}
else if (ageInYears >= 13 && ageInYears < 20) {
    console.log("You are a teenager.");
}
else if (ageInYears >= 20 && ageInYears < 65) {
    console.log("You are a adult.");
}
else if (ageInYears >= 65) {
    console.log("You are a elder.");
}
