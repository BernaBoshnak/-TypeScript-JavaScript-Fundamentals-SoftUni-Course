function lettersChangeNumbers(inputText: string) {
  const textArr = inputText.split(' ')
  let letterPosition = 0
  let sum = 0

  for (const item of textArr) {
    const firstLetter = item[0]
    const lastLetter = item[item.length - 1]
    const num = Number(item.substring(1, item.length - 1))
    const upperCaseLetters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    const lowerCaseLetters = Array.from('abcdefghijklmnopqrstuvwxyz')

    if (upperCaseLetters.includes(firstLetter)) {
      letterPosition = upperCaseLetters.indexOf(firstLetter) + 1
      sum += num / letterPosition
    } else {
      letterPosition = lowerCaseLetters.indexOf(firstLetter) + 1
      sum += num * letterPosition
    }

    if (upperCaseLetters.includes(lastLetter)) {
      letterPosition = upperCaseLetters.indexOf(lastLetter) + 1
      sum -= letterPosition
    } else {
      letterPosition = lowerCaseLetters.indexOf(lastLetter) + 1
      sum += letterPosition
    }
  }

  return sum.toFixed(2)
}

console.log(lettersChangeNumbers('P34562Z q2576f   H456z'))

export {}
