function greeting(name: string = "admin"): string{
    
    return `Hello ${name}, how was the day today ?`;
}

console.log(greeting()); //calling without any arguments
//output : Hello admin, how was the day today ?

console.log(greeting("Ayyan")); //calling without any arguments
//output : Hello Ayyan, how was the day today ?
