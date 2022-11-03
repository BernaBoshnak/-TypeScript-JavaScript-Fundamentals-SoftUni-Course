const revealWords = (key: string, text: string) => {
  const word = key.split(', ')

  word.forEach((char) => {
    text = text.replace('*'.repeat(char.length), char)
  })

  console.log(text)
}

revealWords(
  'great, learning',
  'softuni is ***** place for ******** new programming languages',
)

export {}
