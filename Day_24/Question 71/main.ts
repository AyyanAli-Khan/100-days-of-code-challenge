let Name: string = "Ayyan";
//update Name value
Name = "Ayyan Ali Khan";

//log
console.log(Name);

const student: boolean = true;

try {
    student = false;
} catch (error) {
    console.log("Error : cannot change value of 'const' variable.");
}
