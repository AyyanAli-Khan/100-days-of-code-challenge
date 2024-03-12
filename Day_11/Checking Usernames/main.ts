let username: string[] =["ayyan","zohan","ali","kinza","usman"];

let newUsername: string[] = ["ALi","zaviyan","haris","zohan","rafay"];

newUsername.forEach((name: string) => {
    if (username.includes(name.toLowerCase())) {
        console.log(`username is already in use try another`);
    } else {
        console.log(`username ${name} is avaiable`)
    }
});