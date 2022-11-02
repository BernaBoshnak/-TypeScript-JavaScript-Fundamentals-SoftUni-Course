function wordsTracker(array: string[]) {
  const targetWords = array?.shift()?.split(' ')
  const words = new Map<string, number>()

  targetWords?.forEach((word) => {
    words.set(word, 0)
  })

  array.forEach((word) => {
    if (targetWords?.includes(word)) {
      const currentWord = words.get(word)

      if (currentWord !== undefined) {
        words.set(word, currentWord + 1)
      }
    }
  })

  Array.from(words.entries())
    .sort((countA, countB) => countB[1] - countA[1])
    .forEach((entry) => {
      console.log(`${entry[0]} - ${entry[1]}`)
    })
}

wordsTracker([
  'this sentence',
  'In',
  'this',
  'sentence',
  'you',
  'have',
  'to',
  'count',
  'the',
  'occurances',
  'of',
  'the',
  'words',
  'this',
  'and',
  'sentence',
  'because',
  'this',
  'is',
  'your',
  'task',
])

export {}
