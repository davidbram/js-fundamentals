let solution = (A) => {
    let arr = A.slice(), current;
    let concatArr = [];
    let check;
    for(let i of A.keys()) {
        [current] = arr.splice(i, 1);
        concatArr = concatArr.concat(arr.map(el => {
            check = "";
            if (!isRepeatedChar(current.concat(el))) {
                check = current.concat(el);
                return check;
            }
        }).filter(el => el !== undefined));

        concatArr = concatArr.reduce((acc, val, ind, arr),[]);
        arr = A.slice();
    }
    return concatArr;
}

let isRepeatedChar = (str) => {
    for(let i of str) {
        let pos = -1, count = 0;
        while(~(pos = str.indexOf(i, pos+1))) {
            count += 1;
            if(count == 2) {
                return true;
            }
        }
    }
    return false;
}

// console.log(solution(["co", "dil", "ity"]));

console.log(solution(["co", "dil", "ity"]));
console.log(solution(["abc", "def", "kkk", "csv"]));
console.log(solution(["potato", "kayak", "banana", "racecar"]));
console.log(solution(["eva", "jqw", "tyn", "jan"]));

