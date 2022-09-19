function condenseArrayToNumber(arrayOfNumbers: number[]) {
  while (arrayOfNumbers.length > 1) {
    const condensed = [];

    for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
      condensed.push(arrayOfNumbers[i] + arrayOfNumbers[i + 1]);
    }

    arrayOfNumbers = condensed;
  }

  console.log(arrayOfNumbers[0]);
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
