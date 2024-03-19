"use strict";
const magicians = ["Ali", "Sara", "Zaviyan", "Eric"];
function show_magicians(magician) {
    magician.forEach((magicianName) => {
        console.log(magicianName);
    });
}
function make_great(magician) {
    for (let i = 0; i < magicians.length; i++) {
        magician[i] = `${magician[i]} the Great`;
    }
}
make_great(magicians);
show_magicians(magicians);
