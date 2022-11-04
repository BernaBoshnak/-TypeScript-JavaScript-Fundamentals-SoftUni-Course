function oddTimes(input: string) {
  const numbers = input.split(' ')
  let result = Number(numbers[0])

  for (let i = 1; i < numbers.length; i++) {
    result = result ^ Number(numbers[i])
  }
  console.log(result)
}

oddTimes('5 7 2 7 5 2 5')

export {}
