function imitationGame(input: Array<string>) {
  let message = input.shift()
  input.pop()

  for (const command of input) {
    type Instructions = 'Move' | 'Insert' | 'ChangeAll'
    const [instructions, el1, el2] = command.split('|') as [
      Instructions,
      string,
      string | undefined,
    ]

    switch (instructions) {
      case 'Move': {
        const indexMove = Number(el1)
        if (message) {
          const firstPart = message.substring(0, indexMove)
          const secondPart = message.substring(indexMove)
          message = secondPart + firstPart
        }
        break
      }
      case 'Insert': {
        const indexInsert = Number(el1)
        if (message) {
          const firstPart = message.substring(0, indexInsert)
          const secondPart = message.substring(indexInsert)
          message = firstPart + el2 + secondPart
        }
        break
      }
      case 'ChangeAll': {
        if (message) {
          message = message.split(el1).join(el2)
          break
        }
      }
    }
  }

  console.log(`The decrypted message is: ${message}`)
}

imitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
])

// export {}
