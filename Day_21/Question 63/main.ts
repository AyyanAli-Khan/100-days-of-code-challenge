//create custom type 
type Shape = {
    shape:"circle" | "rectangle",
    radius?:number,// only for circle
    width?:number,//for rectangle
    height?:number, //for rectangle
}

let reactangle: Shape = {
    shape:"rectangle",
    height:100,
    width:200
}

let circle: Shape = {
    shape:"circle",
    radius:50
}

console.log(circle);
console.log(reactangle);

