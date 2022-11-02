function evenAndOddSubtraction(input: number[]) {
  const numbers = input

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i])
  }

  let evenSum = 0
  let oddSum = 0

  for (const number of numbers) {
    if (!(number % 2)) {
      evenSum += number
    } else {
      oddSum += number
    }
  }
  const result = evenSum - oddSum

  console.log(result)
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
evenAndOddSubtraction([3, 5, 7, 9])
evenAndOddSubtraction([2, 4, 6, 8, 10])

export {}
