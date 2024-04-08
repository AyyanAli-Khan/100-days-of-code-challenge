interface Car {
    make:string;
    model:string;
    year:number
}

let car: Car = {
    make:"Honda",
    model:"Civic",
    year:2021,
}

// here's how we can get `model` property from object of car
console.log(car.model); // output : Civic
