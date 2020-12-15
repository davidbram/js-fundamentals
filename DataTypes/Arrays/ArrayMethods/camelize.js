function camelize(str) {
    return str.split("-").map((item, index) => index == 0 ? item.toLowerCase() : titleCase(item)
    ).join('');
}

function titleCase(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));