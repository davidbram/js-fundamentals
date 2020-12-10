function multiplyNumeric(obj) {
    for(key in obj) {
        if(typeof(obj[key]) === 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
menu = multiplyNumeric(menu);

// after the call
console.log(menu);
