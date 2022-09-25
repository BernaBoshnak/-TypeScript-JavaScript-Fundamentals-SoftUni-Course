function bombNumbers(numbers: number[], specialBombNumbers: number[]) {
  const output = numbers.slice();
  while (output.includes(specialBombNumbers[0])) {
    const bombIndex = output.indexOf(specialBombNumbers[0]);
    const startIndex = Math.max(bombIndex - specialBombNumbers[1], 0);
    output.splice(bombIndex, specialBombNumbers[1] + 1);
    output.splice(startIndex, specialBombNumbers[1]);
  }
  return output.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
}

console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));

export {};
