function loopOnObject(obj: { [key: string]: any }) {
    for (let property in obj) {
        console.log(`${property} : ${obj[property]}`);
    }
}

let car = { make: "Tesla", model: "Model 3", year: 2024, color: "white" };

loopOnObject(car);
// output = make : Tesla
         // model : Model 3
         // year : 2024
         // color : white