function valueOfAString(input: Array<string>) {
  const firstString = input[0].split('')
  const instruction = input[1]
  let sum = 0

  if (instruction === 'LOWERCASE') {
    const result = firstString.filter(
      (letter) => letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122,
    )

    result.forEach((el) => {
      sum += el.charCodeAt(0)
    })
  } else {
    const result = firstString.filter(
      (letter) => letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90,
    )

    result.forEach((el) => {
      sum += el.charCodeAt(0)
    })
  }

  return `The total sum is: ${sum}`
}

console.log(valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']))

export {}
