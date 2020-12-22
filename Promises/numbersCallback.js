const numbers = [1, 2];

const getNumbers = (temp) => {
  setTimeout(() => {
    console.log(temp);
    console.log(numbers);
  }, 1000);
}

const addNumber = (number, callback) => {
  setTimeout(() => {
    numbers.push(number);
    callback("String2");
  }, 2000);
}

const main = () => {
  getNumbers("String");
  addNumber(3, getNumbers);
  getNumbers();
}

main();
