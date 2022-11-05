function activationKeys(input: Array<string>) {
  type Index = number
  let activationKey = input.shift()
  input.pop()

  for (const line of input) {
    type Commands = 'Contains' | 'Flip' | 'Slice'
    const tokens = line.split('>>>')
    const command = tokens[0] as Commands

    switch (command) {
      case 'Contains':
        contains(tokens[1])
        break
      case 'Flip':
        flip(tokens[1], Number(tokens[2]), Number(tokens[3]))
        break
      case 'Slice':
        slice(Number(tokens[1]), Number(tokens[2]))
        break
    }
  }

  function flip(type: string, startIndex: Index, endIndex: Index) {
    let temp = ''
    if (activationKey) {
      const replaced = activationKey.substring(startIndex, endIndex)
      if (type === 'Upper') {
        temp = activationKey.substring(startIndex, endIndex).toUpperCase()
        activationKey = activationKey.replace(replaced, temp)
        console.log(activationKey)
      } else {
        temp = activationKey.substring(startIndex, endIndex).toLowerCase()
        activationKey = activationKey.replace(replaced, temp)
        console.log(activationKey)
      }
    }
  }

  function contains(substring: string) {
    if (activationKey && activationKey.includes(substring)) {
      console.log(`${activationKey} contains ${substring}`)
    } else {
      console.log('Substring not found!')
    }
  }

  function slice(startIndex: Index, endIndex: Index) {
    if (activationKey) {
      activationKey =
        activationKey.substring(0, startIndex) +
        activationKey.substring(endIndex)
      console.log(`${activationKey}`)
    }
  }

  return `Your activation key is: ${activationKey}`
}

console.log(
  activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate',
  ]),
)

export {}
