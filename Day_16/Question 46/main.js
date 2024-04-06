"use strict";
let laptop = {
    make: "hp",
    model: "14-dq0020nr",
    year: 2022,
    describe: function () { console.log(`The maker, model and year of this laptop are ${this.make},${this.model} & ${this.year}`); }
};
laptop.describe();
