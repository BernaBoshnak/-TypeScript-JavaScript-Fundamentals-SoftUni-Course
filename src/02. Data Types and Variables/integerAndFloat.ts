function integerAndFloat(
  firstNumber: number,
  seconNumber: number,
  thirdNumber: number
) {
  const sum = firstNumber + seconNumber + thirdNumber;
  const output = sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`;

  console.log(output);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);

export {};
