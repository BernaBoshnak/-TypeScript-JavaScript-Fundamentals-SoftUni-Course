function modernTimes(input: string) {
  const hasOnlyLetters = (word: string) => {
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
      if (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
        return false
      }
    }
    return true
  }

  const isValid = (word: string) => {
    if (
      word.startsWith('#') &&
      word.length > 1 &&
      hasOnlyLetters(word.substring(1))
    ) {
      return true
    }
    return false
  }

  return input
    .split(' ')
    .filter(isValid)
    .map((word) => word.slice(1))
    .join('\n')
}

console.log(
  modernTimes(
    'Nowadays everyone uses # to tag a #special word in #socialMedia',
  ),
)

export {}
