function stringSubstring(searchedWord: string, text: string) {
  searchedWord = searchedWord.toLowerCase()
  text = text.toLowerCase()
  const words = text.split(' ')

  return words.includes(searchedWord)
    ? searchedWord
    : `${searchedWord} not found!`
}

console.log(
  stringSubstring('python', 'JavaScript is the best programming language'),
)

export {}
