function negativeOrPositiveNumbers(numbers: number[]) {
  const newArray = []
  for (const num of numbers) {
    if (num >= 0) {
      newArray.push(num)
    } else {
      newArray.unshift(num)
    }
  }

  for (const element of newArray) {
    console.log(element)
  }
}

negativeOrPositiveNumbers([7, -2, 8, 9])
negativeOrPositiveNumbers([3, -2, 0, -1])

export {}
