function oddAndEvenSum(number: number) {
  const convert = number.toString()
  const evenSum = (a: number) => !(a % 2)
  let totalEvenSum = 0
  let totalOddSum = 0

  for (let i = 0; i < convert.length; i++) {
    const currentNum = Number(convert[i])
    if (evenSum(currentNum)) {
      totalEvenSum += currentNum
    } else {
      totalOddSum += currentNum
    }
  }
  return `Odd sum = ${totalOddSum}, Even sum = ${totalEvenSum}`
}

console.log(oddAndEvenSum(1000435))
console.log(oddAndEvenSum(3495892137259234))

export {}
