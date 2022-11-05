function mirrorWords(input: Array<string>) {
  const text = input.shift()
  const pattern = /(@|#)(?<word>[A-Za-z]{3,})\1\1(?<mirror>[A-Za-z]{3,})\1/g
  const matches = text && [...text.matchAll(pattern)]
  const mirrorWords: string[] = []

  if (matches) {
    for (const match of matches) {
      const word = match[2]
      const mirror = match[3]
      const reversed = mirror.split('').reverse().join('')
      if (word === reversed) {
        mirrorWords.push(word + ' <=> ' + mirror)
      }
    }

    if (matches.length === 0) {
      console.log('No word pairs found!')
      console.log('No mirror words!')
    } else {
      console.log(`${matches.length} word pairs found!`)

      if (mirrorWords.length === 0) {
        console.log('No mirror words!')
      } else {
        console.log('The mirror words are:')
        console.log(mirrorWords.join(', '))
      }
    }
  }
}

mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
])

export {}
