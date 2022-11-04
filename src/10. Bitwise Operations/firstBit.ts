function firstBit(input: number) {
  const position = input >> 1
  const result = position & 1

  console.log(result)
}

firstBit(51)

export {}
