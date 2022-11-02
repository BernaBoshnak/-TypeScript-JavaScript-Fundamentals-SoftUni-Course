function mathPower(num: number, power: number) {
  let result = 1

  for (let i = 0; i < power; i++) {
    result *= num
  }
  return result
}

console.log(mathPower(2, 8))
console.log(mathPower(3, 4))

export {}
