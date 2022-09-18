function specialNumbers(number: number) {
  const currentNumber = number;

  for (let i = 1; i <= currentNumber; i++) {
    let digit = i;
    let sum = 0;

    while (digit > 0) {
      sum += digit % 10;
      digit = parseInt((digit / 10).toString(), 10);
    }
    const result = sum === 5 || sum === 7 || sum === 11;
    result ? console.log(`${i} -> True`) : console.log(`${i} -> False`);
  }
}

specialNumbers(15);
specialNumbers(24);
