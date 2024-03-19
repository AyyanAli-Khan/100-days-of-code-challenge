const magicians: string[] = ["Ali", "Sara", "Zaviyan", "Eric"];

function show_magicians(magician: string[]) {
    magician.forEach((magicianName) => {
        console.log(magicianName);
    });
}

function make_great(magician: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magician[i] = `${magician[i]} the Great`;
    }
}

make_great(magicians);
show_magicians(magicians);
