let magicians: string[] = ["Ali", "Sara", "Zaviyan", "Eric"];

function make_great(greatMagician: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    greatMagician[i] = `${greatMagician[i]} the Great`;
  }

  return greatMagician;
}

let great_magicians = make_great(magicians.slice());

console.log("Original Magicians :");
console.log(magicians);
console.log("\n");
console.log("Great Magicians :");
console.log(great_magicians);
