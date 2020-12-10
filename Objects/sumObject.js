const {isEmpty} = require("./isEmpty");

function sum(obj) {
    let sum = 0;
    if(!isEmpty(obj)){
        for(key in obj) {
            sum += obj[key];
        }
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

console.log( sum(salaries) );