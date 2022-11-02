function reversedChars(
  firstLetter: string,
  secondLetter: string,
  lastLetter: string,
) {
  const result = `${lastLetter} ${secondLetter} ${firstLetter}`
  console.log(result)
}

reversedChars('A', 'B', 'C')
reversedChars('1', 'L', '&')

export {}
