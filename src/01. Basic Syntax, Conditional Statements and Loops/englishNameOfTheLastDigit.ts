function englishNameOfTheLastDigit(number: number) {
  let lastDigit = number % 10

  if (lastDigit < 0) {
    lastDigit = Math.abs(lastDigit)
  }

  switch (lastDigit) {
    case 0:
      return 'zero'
    case 1:
      return 'one'
    case 2:
      return 'two'
    case 3:
      return 'three'
    case 4:
      return 'four'
    case 5:
      return 'five'
    case 6:
      return 'six'
    case 7:
      return 'seven'
    case 8:
      return 'eight'
    case 9:
      return 'nine'
  }
}

console.log(englishNameOfTheLastDigit(512))
console.log(englishNameOfTheLastDigit(1))
console.log(englishNameOfTheLastDigit(1643))

export {}
