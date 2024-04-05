"use strict";
function car_info(manufacturer, modelName, ...optionalFeature) {
    let object = { manufacturer, modelName };
    optionalFeature.forEach(([key, value]) => {
        object[key] = value;
    });
    console.log(optionalFeature);
    return object;
}
console.log(car_info("Honda", "Civic", ["year", 2021], ["Airbags", true], ["colour", "white"]));
