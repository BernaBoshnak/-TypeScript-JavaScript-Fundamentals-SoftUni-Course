function maxNumber(array: number[]) {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    let isTopInt = true
    const currentElemen = array[i]
    const rightElementArray = array.slice(i + 1)

    for (let j = 0; j < rightElementArray.length; j++) {
      if (currentElemen <= rightElementArray[j]) {
        isTopInt = false
        break
      }
    }
    if (isTopInt) {
      newArray.push(currentElemen)
    }
  }
  console.log(newArray.join(' '))
}

maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])

export {}
