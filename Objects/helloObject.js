let user = {};
let user1 = user;
user1.name = "abcxyz";
user.name = "John";
console.log(user1.name);

user["surname"] = "Smith";

console.log(user);

user["name"] = "Pete";

console.log(user);

delete user.name;

console.log(user);


// how to deep copy object in javascript