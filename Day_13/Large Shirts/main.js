"use strict";
function make_shirt(shirtSize = "large", messageOnShirt = "I love Typrscript") {
    console.log(`Your shirt size :${shirtSize} ,
Mesaage you want to print on the shirt is "${messageOnShirt}"\n`);
}
make_shirt("large");
make_shirt("medium");
make_shirt("small", "GenAI developer");
