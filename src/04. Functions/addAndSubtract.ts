const sum = (firtsNum: number, secondNum: number) => firtsNum + secondNum;
const subtraction = (result: number, thirdNum: number) => result - thirdNum;

function addAndSubtract(firtsNum: number, secondNum: number, thirdNum: number) {
  const result = sum(firtsNum, secondNum);

  return subtraction(result, thirdNum);
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));

export {};
