type Char = string
type Index = number[]
type Letters = Record<Char, Index>

function serializeString(text: string) {
  const letters: Letters = {}

  for (let i = 0; i < text.length; i++) {
    if (!letters[text[i]]) {
      letters[text[i]] = []
      letters[text[i]].push(i)
    } else {
      letters[text[i]].push(i)
    }
  }
  const entriesOfLetters = Object.entries(letters)

  for (const [char, indexes] of entriesOfLetters) {
    if (indexes.length > 1) {
      const joinned = indexes.join('/')
      console.log(`${char}:${joinned}`)
    } else {
      console.log(`${char}:${indexes}`)
    }
  }
}

serializeString('avjavamsdmcalsdm')

export {}
