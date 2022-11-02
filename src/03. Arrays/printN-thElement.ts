function printElement(array: string[]) {
  const newArray = []
  const lastElement = Number(array.pop())

  for (let i = 0; i < array.length; i++) {
    if (!(i % lastElement)) {
      newArray.push(array[i])
    }
  }
  console.log(newArray.join(' '))
}

printElement(['5', '20', '31', '4', '20', '2'])
printElement(['dsa', 'asd', 'test', 'test', '2'])
printElement(['1', '2', '3', '4', '5', '6'])

export {}
