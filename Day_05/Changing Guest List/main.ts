let guest_list= ["Arif","Haris","Usman","Arqam"];

guest_list.forEach((name:string) => {
         console.log(`Hi,${name} you are invited at dinner`);
});


//  <================== Changing Guest List  begin ===========================>
console.log("Arqam : 'sorry i can't came at dinner'");

// replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let new_guest: string = "Ali"

guest_list[guest_list.indexOf("Arqam")] = new_guest;


// Print a second set of invitation messages, one for each person who is still in your list.

guest_list.forEach((name: string) => {
    console.log(`Hi ${name},I am glade to invite you at dinner`)
});

