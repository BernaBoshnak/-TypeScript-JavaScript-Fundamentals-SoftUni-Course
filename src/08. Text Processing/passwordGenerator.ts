function passwordGenerator(input: Array<string>) {
  const firstString = input[0]
  const lastString = input[1]
  const word = input[2].toUpperCase().split('')
  let wordIndex = 0

  const password = firstString.concat(lastString).split('')

  for (let i = 0; i < password.length; i++) {
    const letter = password[i]

    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      password.splice(i, 1, word[wordIndex])
      wordIndex++
      if (wordIndex >= word.length) {
        wordIndex = 0
      }
    }
  }

  return `Your generated password is ${password.reverse().join('')}`
}

console.log(passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']))

export {}
