"use strict";
let userDetails = (function () {
    let name = "Ayyan";
    let age = 17;
    return {
        info: function () { console.log(`Name : ${name}, Age: ${age}`); }
    };
})();
console.log(userDetails.info());
