function getAverageAge(users) {
    
    const reducer = (accumulator, user) => accumulator + user.age;
    return users.reduce(reducer, 0)/users.length;

}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28