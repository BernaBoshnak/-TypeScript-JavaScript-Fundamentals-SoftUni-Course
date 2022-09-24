function magicMatrices(array: number[][]) {
  let isEqual = true;

  for (let i = 0; i < array.length; i++) {
    let sumOfRow = 0;
    let sumOfCol = 0;
    for (let col = 0; col < array.length; col++) {
      sumOfCol += array[col][i];
    }
    for (let row = 0; row < array.length; row++) {
      sumOfRow += array[i][row];
    }
    if (sumOfCol !== sumOfRow) {
      isEqual = false;
      break;
    } else {
      continue;
    }
  }
  if (isEqual) {
    console.log("true");
  } else {
    console.log("false");
  }
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);

export {};
