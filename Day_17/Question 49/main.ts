function hobbise(...hobbies: string[]){
    hobbies.forEach(hobby => {
        console.log(`Enjoy your ${hobby} hobby`);
    });
}

console.log(hobbise("coding","reading","painting"))