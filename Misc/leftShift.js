// 4. Left shift arrary. [3,1,2] - after two iterations it should be [2,3,1]
//     - implement without mutating the original array.
//     - modify the original one.

function shiftLeft(arr) {
    return arr.slice(1,arr.length).concat(arr.slice(0,1));
}

function shiftLeftMutate(arr) {
    return arr.push(arr.unshift());
}

let arr = [3, 1, 2];
let arr1 = shiftLeft(arr);
let arr2 = shiftLeft(arr1);
console.log(arr2);