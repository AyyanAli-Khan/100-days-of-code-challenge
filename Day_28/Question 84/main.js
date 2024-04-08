"use strict";
function replaceText(string) {
    return string.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceText("JavaScript is mainly used for front-end web development."));
// output : TypeScript is mainly used for front-end web development.
