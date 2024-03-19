"use strict";
const magicians = ["Ali", "Sara", "Zaviyan", "Eric"];
function show_magicians(magician) {
    magician.forEach((magicianName) => {
        console.log(magicianName);
    });
}
show_magicians(magicians);
