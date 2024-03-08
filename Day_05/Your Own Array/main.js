var transportation = ["bike", "car", "truck"];
var statements = ["I like to drive", "I love to drive", "I hate to drive"];
var len = transportation.length;
for (var index = 0; index < len; index++) {
    console.log(" ".concat(transportation[index], " ").concat(statements[index]));
}
