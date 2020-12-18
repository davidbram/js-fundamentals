const numbers = [1, 2];

function getNumbers() {
  setTimeout(() => {
    console.log(numbers);
  }, 1000);
}

function addNumber(number, callback) {
  setTimeout(() => {
    numbers.push(number);
    callback();
  }, 2000);
}

function main() {
  getNumbers();
  addNumber(3, getNumbers);
//   getNumbers();
}

main();
