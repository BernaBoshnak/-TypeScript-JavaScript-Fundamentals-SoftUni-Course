function wordOccurrences(array: string[]) {
  const words = new Map<string, number>()

  array.forEach((word) => {
    if (!words.has(word)) {
      words.set(word, 0)
    }

    const currentWord = words.get(word)

    if (currentWord !== undefined) {
      words.set(word, currentWord + 1)
    }
  })

  const sorted = Array.from(words).sort(
    ([, countWordsA], [, countWordsB]) => countWordsB - countWordsA,
  )

  for (const [word, countWords] of sorted) {
    console.log(`${word} -> ${countWords} times`)
  }
}

wordOccurrences([
  'Here',
  'is',
  'the',
  'first',
  'sentence',
  'Here',
  'is',
  'another',
  'sentence',
  'And',
  'finally',
  'the',
  'third',
  'sentence',
])

export {}
