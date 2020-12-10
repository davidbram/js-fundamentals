const { multiply } = require("lodash");

let calculator = {
    x:0,
    y:0,
    read() {
        this.x = prompt("Enter the 1st value: ");
        this.y = prompt("Enter the 2nd value: ")
    },
    sum(x, y) {
        return x + y;
    },
    mul(x, y) {
        return x * y;
    }
}


