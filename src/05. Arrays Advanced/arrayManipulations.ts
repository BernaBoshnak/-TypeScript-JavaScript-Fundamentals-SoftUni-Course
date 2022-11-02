function arrayManipulations(commands: Array<string>) {
  let array = commands.shift()?.split(' ').map(Number)

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i].split(' ')

    const firstNum = Number(command[1])
    const secondNum = Number(command[2])
    switch (command[0]) {
      case 'Add':
        add(firstNum)
        break
      case 'Remove':
        remove(firstNum)
        break
      case 'RemoveAt':
        removeAt(firstNum)
        break
      case 'Insert':
        insert(firstNum, secondNum)
        break
    }
  }
  function add(element: number) {
    array?.push(element)
  }

  function remove(num: number) {
    array = array?.filter((element) => element !== num)
  }

  function removeAt(index: number) {
    array?.splice(index, 1)
  }

  function insert(num: number, index: number) {
    array?.splice(index, 0, num)
  }
  console.log(array?.join(' '))
}

arrayManipulations([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3',
])

export {}
