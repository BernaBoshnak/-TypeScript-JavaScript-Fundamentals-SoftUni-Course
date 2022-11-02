const smallestNum = (firtsNum: number, secondNum: number, thirdNum: number) =>
  Math.min(firtsNum, secondNum, thirdNum)

function smallestOfThreeNumbers(
  firtsNum: number,
  secondNum: number,
  thirdNum: number,
) {
  return smallestNum(firtsNum, secondNum, thirdNum)
}

console.log(smallestOfThreeNumbers(2, 5, 3))
console.log(smallestOfThreeNumbers(600, 342, 123))
console.log(smallestOfThreeNumbers(25, 21, 4))

export {}
