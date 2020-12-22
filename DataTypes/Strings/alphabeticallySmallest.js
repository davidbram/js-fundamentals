const solution = (str) => {
    let subArr = str.split('')
    .map((val, index) => { 
        strArr = [...str]; 
        strArr.splice(index, 1); 
        return strArr; 
    })
    .map(arr => arr.join(''));
    return subArr.sort((a, b) => a.localeCompare(b)).shift();
}




console.log(solution("acb") === "ab");
console.log(solution("hot") === "ho");
console.log(solution("codility") === "cdility");
console.log(solution("aaaa") === "aaa");