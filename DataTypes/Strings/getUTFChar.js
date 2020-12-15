let str = "stringify";

// How to access the utf 16 code of the character
console.log(str.codePointAt(0));

// How to access the character for the utf 16 code
console.log(String.fromCodePoint(99));


let newStr = '';

for(let i = 65; i <= 220; i++) {
    if(String.fromCodePoint(i) == '\n')
        continue;
    newStr += String.fromCodePoint(i);
}

console.log(newStr);

