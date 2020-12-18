const numbers = [1, 2];

function getNumbers() {
  setTimeout(() => {
    console.log(numbers);
  }, 1000);
}

function addNumber(number) {
  return new Promise(resolve => setTimeout(() => {
    numbers.push(number);
    resolve();
  }, 2000));
}

function main() {
//   getNumbers();
//   addNumber(3, getNumbers);
// //   getNumbers();
  getNumbers()
  addNumber(3).then(() => getNumbers());
}

main();