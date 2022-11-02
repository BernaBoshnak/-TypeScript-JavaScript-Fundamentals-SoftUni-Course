function processOddNumbers(numbers: number[]) {
  const oddNumbers: number[] = []
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(numbers[i])
    }
  }
  const result = oddNumbers
    .map((b) => b * 2)
    .reverse()
    .join(' ')
  console.log(result)
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])

export {}
