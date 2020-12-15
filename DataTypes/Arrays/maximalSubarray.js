// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         for(let j = i; j < arr.length; j++) {
//             sum += arr[j];
//             maxSum = Math.max(sum, maxSum);
//         }
//     }
//     return maxSum;
// }


function getMaxSubSum(arr) { 
    let maxSum = 0;
    let partialSum = 0;

    for(let i of arr) {
        partialSum += i;
        maxSum = Math.max(partialSum, maxSum);
        partialSum = partialSum < 0 ? 0: partialSum;
    }
    return maxSum;
}


console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-1, -2, -3]) ); // 0