const numbers = [1, 2];

const getNumbers = () => {
  setTimeout(() => {
    console.log(numbers);
    return Promise.resolve();
  }, 1000)
}

const addNumber = async (number) => {
  return new Promise(resolve => setTimeout(() => {
    numbers.push(number);
    resolve();
  }, 2000));
}

const main = async () => {
  getNumbers();
  await addNumber(3);
  getNumbers();
}

main();