function car_info(
    manufacturer: string,
    modelName: string,
    ...optionalFeature: [string, any][]
): object {
    interface DynamicObject {
        manufacturer: string;
        modelName: string;
        [key: string]: any;
    }
    let object: DynamicObject = { manufacturer, modelName };

    optionalFeature.forEach(([key, value]) => {
        object[key] = value;
    });

    return object;
}

console.log(
    car_info(
        "Honda",
        "Civic",
        ["year", 2021],
        ["Airbags", true],
        ["colour", "white"]
    )
);
