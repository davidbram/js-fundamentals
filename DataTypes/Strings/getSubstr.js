let str = "stringify";

console.log(str.substr(-4,2)) // this one allows to specify the length instead of the index

console.log(str.substring(8, 6)); // same as slice but also allows start > end. NEgative args not supported

console.log(str.slice(3, -2));

console.log(str.slice(3));

