function emojiDetector(input: Array<string>) {
  const text = input.shift()
  const emojiPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g
  const digitPattern = /\b(\d+)\b/g
  let coolThresholdSum = 1

  text &&
    text.split('').forEach((ch) => {
      if (ch.match(digitPattern) !== null) {
        coolThresholdSum *= Number(ch.match(digitPattern))
      }
    })
  console.log(`Cool threshold: ${coolThresholdSum}`)

  let count = 0
  const result = []
  const matches = text && [...text.matchAll(emojiPattern)]

  if (matches) {
    for (const line of matches) {
      count++
      const coolNess = line.groups?.emoji
        .split('')
        .map((s) => s.charCodeAt(0))
        .reduce((a, b) => a + b)
      if (coolNess && coolNess > coolThresholdSum) {
        result.push(line[0])
      }
    }
  }
  
  console.log(`${count} emojis found in the text. The cool ones are:`)
  result.forEach((emoji) => console.log(emoji))
}

emojiDetector([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
])

export {}
