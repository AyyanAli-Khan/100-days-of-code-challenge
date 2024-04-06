"use strict";
let price_01 = [1000, 2500, 8000, 1200];
let price_02 = [20000, 79000, 10000, 5000];
let combinedPriceSet = [...price_01, ...price_02].sort((a, b) => a - b);
console.log(combinedPriceSet);

