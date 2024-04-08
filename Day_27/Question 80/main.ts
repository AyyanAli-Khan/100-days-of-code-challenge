let car: {[key:string]:any} = {
    make:"Tesla",
    model:"Model 3",
    year:2021 ,
}

// add new property in car object
car.color = "white";

// update year property
car.year = 2024;
// log
console.log(car); // output : { make: 'Tesla', model: 'Model 3', year: 2024, color: 'white' }
