function amazingNumbers(number: number) {
  let currentNumber = number;
  let sum = 0;

  while (currentNumber > 0) {
    sum += currentNumber % 10;
    currentNumber = Math.trunc(currentNumber / 10);
  }

  sum.toString().includes("9")
    ? console.log(`${number} Amazing? True`)
    : console.log(`${number} Amazing? False`);
}

amazingNumbers(1233);
amazingNumbers(999);
