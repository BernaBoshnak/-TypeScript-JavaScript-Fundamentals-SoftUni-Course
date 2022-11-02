function charsToString(
  firstLetter: string,
  secondLetter: string,
  lastLetter: string,
) {
  const result = `${firstLetter}${secondLetter}${lastLetter}`

  console.log(result)
}

charsToString('a', 'b', 'c')
charsToString('%', '2', 'o')
charsToString('1', '5', 'p')

export {}
