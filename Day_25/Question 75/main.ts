function compoundAssignmentOperators() {
    
    let x = 4;

    x += 4 ; //addition using Compound Assignment Operators
    console.log(`After addition : ${x}`);
    

    x *= 10; //multiplication using Compound Assignment Operators
    console.log(`After multiplication : ${x}`);
    
    x -= 5;  //subtraction using Compound Assignment Operators
    console.log(`After subtraction : ${x}`);

    x /= 2; //division using Compound Assignment Operators
    console.log(`After division : ${x}`);
}

compoundAssignmentOperators(); // output :  After addition : 8
                                        // After multiplication : 80
                                         //After subtraction : 75
                                        // After division : 37.5