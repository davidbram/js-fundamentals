const numbers = [1, 2];

const getNumbers = () => {
  setTimeout(() => {
    console.log(numbers);
  }, 1000);
}

const addNumber = (number) => {
  return new Promise((resolve, reject) => setTimeout(() => {
    if(number === 5) {
      reject(new Error("Wrong no"));
    }
    numbers.push(number);
    resolve();
  }, 2000));
}

const main = () => {
//   getNumbers();
//   addNumber(3, getNumbers);
// //   getNumbers();
  getNumbers();
  addNumber(5).then(getNumbers).catch(err => console.log(err));
}

main();