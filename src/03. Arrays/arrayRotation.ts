function arrayRotation(array: number[], rotation: number) {
  for (let i = 0; i < rotation; i++) {
    const element = (array.shift(), 10);
    array.push(element);
  }
  console.log(array.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);

export {};
