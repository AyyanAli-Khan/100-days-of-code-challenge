var usernames = ["kinza", "nabeel", "shayyan", "admin", "ahsan"];
usernames.forEach(function (currentUsername) {
    if (currentUsername.toLowerCase() == "admin") {
        console.log("Hello admin , all pending tasks are done.");
    }
    else {
        console.log("Hello ".concat(currentUsername, ",thank you for logging in again in our website."));
    }
});
