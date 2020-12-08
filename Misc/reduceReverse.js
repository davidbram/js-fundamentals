// reduce to reverse

const arr1 = [1,2,3];

console.log(arr1);
let arr2 = arr1.reduce((accumulator, currentValue) => {
    accumulator.unshift(currentValue)
    return accumulator
}, []);

console.log(arr2);

// alternatively

let arr3 = arr1.reduceRight((accumulator, currentValue) => {
    accumulator.push(currentValue)
    return accumulator
}, []);

console.log(arr3);
