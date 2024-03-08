var guest_list = ["Arif", "Haris", "Usman", "Arqam"];
guest_list.forEach(function (name) {
    console.log("Hi,".concat(name, " you are invited at dinner"));
});
//  <================== Changing Guest List  begin ===========================>
console.log("Arqam : 'sorry i can't came at dinner'");
// replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var new_guest = "Ali";
guest_list[guest_list.indexOf("Arqam")] = new_guest;
// Print a second set of invitation messages, one for each person who is still in your list.
guest_list.forEach(function (name) {
    console.log("Hi ".concat(name, ",I am glade to invite you at dinner"));
});
//  <================== More Guest begin ===========================>
console.log("I found a bigger dinner table. Now we can invite more guests");
// Add one new guest to the beginning of your array.
guest_list.unshift("Zoha");
//  Add one new guest to the middle of your array
guest_list.splice(3, 0, "Zohan");
// Add one new guest to the end of your array
guest_list.push("Zaviyan");
console.log(guest_list);
//  <================== Shrinking Guest begin ===========================>
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry friends we can invite only two people for dinner.");
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guest_list.length > 2) {
    var notinvitedGuest = guest_list.pop();
    console.log("Sorry ".concat(notinvitedGuest, " I can\u2019t invite you at dinner"));
}
console.log(guest_list);
// Print a message to each of the two people still on your list, letting them know they’re still invited.
guest_list.forEach(function (name) {
    console.log("Hi,".concat(name, " you are still invited"));
});
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while (guest_list.length > 0) {
    guest_list.pop();
}
console.log(guest_list);
