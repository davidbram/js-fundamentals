const numbers = [1, 2];

function getNumbers() {
  setTimeout(() => {
    console.log(numbers);
    return Promise.resolve();
  }, 1000)
}

async function addNumber(number) {
  return new Promise(resolve => setTimeout(() => {
    numbers.push(number);
    resolve();
  }, 2000));
}

async function main() {
  getNumbers();
  await addNumber(3);
  getNumbers();
}

main();