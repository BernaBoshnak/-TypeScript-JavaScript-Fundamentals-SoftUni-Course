function magicSum(array: number[], number: number) {
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i]
    for (let b = i + 1; b < array.length; b++) {
      const nextNum = array[b]
      sum = currentNum + nextNum
      if (sum === number) {
        console.log(Number(currentNum) + ' ' + Number(nextNum))
      }
    }
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)

export {}
