"use strict";
function arearOfRectangle(height, width) {
    // formula of area of rectangle is height multiply by its width
    return height * width;
}
let areaArrow = (height, width) => height * width;
// call simple function
console.log(arearOfRectangle(90, 60));
// call arrow function
console.log(areaArrow(30, 30));
