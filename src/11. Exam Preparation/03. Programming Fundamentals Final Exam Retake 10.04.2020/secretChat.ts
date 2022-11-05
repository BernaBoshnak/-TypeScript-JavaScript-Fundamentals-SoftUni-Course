type Letter = string

function secretChat(input: Array<string>) {
  let message = input.shift()
  input.pop()

  for (const line of input) {
    type Commands = 'ChangeAll' | 'Reverse' | 'InsertSpace'
    const tokens = line.split(':|:')
    const command = tokens[0] as Commands

    switch (command) {
      case 'ChangeAll':
        changeAll(tokens[1], tokens[2])
        break
      case 'Reverse':
        reverse(tokens[1])
        break
      case 'InsertSpace':
        insertSpace(Number(tokens[1]))
        break
    }
  }

  function changeAll(substring: Letter, replacement: Letter) {
    if (message && message.includes(substring)) {
      message = message.split(substring).join(replacement)
    }
    console.log(message)
  }

  function reverse(substring: Letter) {
    if (message && message.includes(substring)) {
      const reversed = substring.split('').reverse().join('')
      message = message.replace(substring, reversed)
      console.log(message)
    } else {
      console.log('error')
    }
  }

  function insertSpace(index: number) {
    let result = ''
    const firstPart = message && message.slice(0, index)
    const seconPart = message && message.slice(index)
    if (firstPart && seconPart) {
      result = result.concat(firstPart, ` `, seconPart)
      message = result

      console.log(message)
    }
  }

  console.log(`You have a new text message: ${message}`)
}

secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal',
])

export {}
