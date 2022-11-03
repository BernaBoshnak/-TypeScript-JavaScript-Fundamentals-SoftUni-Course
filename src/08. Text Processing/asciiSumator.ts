function asciiSumator(array: Array<string>) {
  const firstCharacter = array[0].charCodeAt(0)
  const secondCharacter = array[1].charCodeAt(0)
  const randomString = array[2].split('')
  let sum = 0

  randomString.forEach((el) => {
    const currentChar = el.charCodeAt(0)

    if (firstCharacter < secondCharacter) {
      if (currentChar > firstCharacter && currentChar < secondCharacter) {
        sum += currentChar
      }
    } else {
      if (currentChar < firstCharacter && currentChar > secondCharacter) {
        sum += currentChar
      }
    }
  })

  return sum
}

console.log(asciiSumator(['.', '@', 'dsg12gr5653feee5']))

export {}
