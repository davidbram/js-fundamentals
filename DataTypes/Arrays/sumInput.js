function sumInput() {
    let val, sum = 0, arr = [];
    while(true) {
      val = Number(prompt("Enter a number: "));
      if (isNaN(val) || val == ' ' || val == null)
        break;
      arr.push(val);
    }
    if(arr != 0) {
        for(let i of arr) {
            sum += i;
        }
    }
    return sum;
}

