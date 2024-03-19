const magicians: string[] = ["Ali", "Sara", "Zaviyan", "Eric"];

function show_magicians(magician: string[]) {
    magician.forEach((magicianName) => {
        console.log(magicianName);
    });
}
show_magicians(magicians);
