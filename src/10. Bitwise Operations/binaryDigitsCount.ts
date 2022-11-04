type BinaryDigit = 0 | 1

function binaryDigitsCount(integerNum: number, binaryDigit: BinaryDigit) {
  let result = ''
  let count = 0

  while (integerNum > 0) {
    result = (integerNum % 2) + result
    integerNum = Math.trunc(integerNum / 2)
  }

  const resultArr = result.split('')

  for (const element of resultArr) {
    if (Number(element) === binaryDigit) {
      count++
    }
  }

  return count
}

console.log(binaryDigitsCount(15, 1))

export {}
