function addOrSubtract(numbersInput: number[]) {
  const numbers = numbersInput;
  const newlyModifiedArray = [];
  let sumOfOriginalArray = 0;
  let sumOfModifiedArray = 0;

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);
    sumOfOriginalArray += numbers[i];
    if (!(numbers[i] % 2)) {
      newlyModifiedArray.push(numbers[i] + i);
    } else {
      newlyModifiedArray.push(numbers[i] - i);
    }
    sumOfModifiedArray += Number(newlyModifiedArray[i]);
  }
  console.log(newlyModifiedArray);
  console.log(sumOfOriginalArray);
  console.log(sumOfModifiedArray);
}

addOrSubtract([5, 15, 23, 56, 35]);
addOrSubtract([-5, 11, 3, 0, 2]);
