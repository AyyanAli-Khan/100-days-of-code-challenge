function createObject(key:string , value:string): object {
    let object = {}
    // object[key] = value;
    Object.assign(object,{[key]:value})
    return object;
}

let username = createObject("name","Ayyan Ali Khan");

console.log(username);
