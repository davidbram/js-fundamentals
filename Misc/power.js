let x = prompt("Enter a number: ");
let n = prompt("Enter a exponent: ");

function pow(x, n){
    if (n == 0)
        return 1;
    else if(n == 1)
        return x;
    return x*pow(x,n-1);
}

alert(`The power is ${pow(x,n)}`);