function nxnMatrix(number: number) {
  const firstLine = (number + " ").repeat(number);

  const printMatrix = (number: number) => {
    for (let i = 0; i < number; i++) {
      console.log(firstLine);
    }
  };

  const result = printMatrix(number);
  return result;
}

nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);

export {};
