let usernames: string[] = ["kinza","nabeel","shayyan","admin","ahsan"];

usernames.forEach((currentUsername: string) => {
            if (currentUsername.toLowerCase() == "admin") {
                console.log("Hello admin , all pending tasks are done.");
            }
            else{
                console.log(`Hello ${currentUsername},thank you for logging in again in our website.`);
            }
});