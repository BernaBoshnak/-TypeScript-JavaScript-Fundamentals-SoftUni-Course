function bit(input: number, position: number) {
  const bitAtPositionP = input >> position
  const result = bitAtPositionP & position

  console.log(result)
}

bit(111, 8)

export {}
