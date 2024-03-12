"use strict";
let username = ["ayyan", "zohan", "ali", "kinza", "usman"];
let newUsername = ["ALi", "zaviyan", "haris", "zohan", "rafay"];
newUsername.forEach((name) => {
    if (username.includes(name.toLowerCase())) {
        console.log(`username is already in use try another`);
    }
    else {
        console.log(`username ${name} is avaiable`);
    }
});
