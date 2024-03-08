// import { reverse } from "dns";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places_name = ["Swiss Alps", "Hunza Valley", "Singspore", "Malaysia", "Qatar"];
console.log("Array in original condition : ", places_name);
var places_name_copy = __spreadArray([], places_name, true);
console.log("Array in alphabetical order :", __spreadArray([], places_name, true).sort());
console.log("Array in original condition : ", places_name);
console.log("Array in reverse alphabetical order :", __spreadArray([], places_name, true).reverse());
console.log("Array in original condition : ", places_name);
places_name.reverse();
console.log("Reverse order of Array : ", places_name);
places_name.reverse();
console.log("Array in back to its original condition : ", places_name);
places_name.sort();
console.log("Array in alphabetical order :", places_name);
places_name.reverse();
console.log("Array in reverse alphabetical order :", places_name);
