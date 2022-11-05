type Destination = string
type Index = number

function worldTour(input: Array<string>) {
  let text = input.shift()
  input.pop()

  for (const line of input) {
    type Commands = 'Add Stop' | 'Remove Stop' | 'Switch'
    const tokens = line.split(':')
    const command = tokens[0] as Commands

    switch (command) {
      case 'Add Stop':
        add(Number(tokens[1]), tokens[2])
        break
      case 'Remove Stop':
        remove(Number(tokens[1]), Number(tokens[2]))
        break
      case 'Switch':
        switchh(tokens[1], tokens[2])
        break
    }
  }

  function add(index: Index, destination: Destination) {
    if (text && index < text.length && index >= 0) {
      const textArr = text.split('')
      textArr.splice(index, 0, destination)
      text = textArr.join('')
    }

    console.log(text)
  }

  function remove(start_index: Index, end_index: Index) {
    if (
      text &&
      start_index < text.length &&
      start_index >= 0 &&
      end_index < text.length &&
      end_index >= 0
    ) {
      text = text.slice(0, start_index) + text.slice(end_index + 1)
    }

    console.log(text)
  }

  function switchh(old_destination: Destination, new_destination: Destination) {
    if (text && text.includes(old_destination)) {
      text = text.replace(old_destination, new_destination)
    }

    console.log(text)
  }

  console.log(`Ready for world tour! Planned stops: ${text}`)
}

worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
])

export {}
