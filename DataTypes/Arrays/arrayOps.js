// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
let styles = ["Jazz", "Blues"];


// Append “Rock-n-Roll” to the end.
styles.push("Rock-n-Roll");
// styles[styles.length] = "Rock-n-Roll";
console.log(styles);


// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
styles[parseInt(styles.length / 2)] = "Classics";
console.log(styles);


// Strip off the first value of the array and show it.
styles.shift();
console.log(styles);

// Prepend Rap and Reggae to the array.
styles.unshift("Rap, Reggae")
console.log(styles);