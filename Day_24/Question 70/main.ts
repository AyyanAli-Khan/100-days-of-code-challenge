function letInLoop() {
    
    for (let number = 1; number <= 5 ; number++) {
        console.log(number);
        
    };
 
    // cannot accces  number here because let is braces scoped
}

letInLoop(); // output :    1
                        //  2
                        //  3
                        //  4
                        //  5