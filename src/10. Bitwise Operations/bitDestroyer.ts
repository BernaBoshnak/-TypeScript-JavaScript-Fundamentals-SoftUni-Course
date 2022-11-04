function bitDestroyer(number: number, position: number) {
  const shiftedNumber = 1 << position
  const mask = ~shiftedNumber
  const newNumber = number & mask

  console.log(newNumber)
}

bitDestroyer(1313, 5)

export {}
