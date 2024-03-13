"use strict";
function city_country(city, country) {
    let formattedString = `${city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}, ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()}`;
    return formattedString; //return in proper tittle case
}
;
let pair1 = city_country("karachi", "pakistan");
let pair2 = city_country("lahore", "pakistan");
let pair3 = city_country("beijing", "china");
console.log(pair1);
console.log(pair2);
console.log(pair3);
