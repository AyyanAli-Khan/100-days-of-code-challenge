function city_country(city: string , country: string) {
 
    let formattedString: string = `${city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}, ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()}`;

    return formattedString; //return in proper tittle case
};

let pair1: string = city_country("karachi","pakistan");
let pair2: string = city_country("lahore","pakistan");
let pair3: string = city_country("beijing","china");

console.log(pair1);
console.log(pair2);
console.log(pair3);

