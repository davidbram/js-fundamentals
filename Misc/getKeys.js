const person = {
    name: "Sanjay",
    salary: 5500,
    country: "India",
}
// store all the keys of person object in the array. Output should be- ["name","salary","country”];

let personKeys = Object.keys(person);

console.log(personKeys);
