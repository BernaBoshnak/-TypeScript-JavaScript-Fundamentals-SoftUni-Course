type Target = [number, number, number]

function searchNumber(firstArray: number[], secondArray: Target) {
  const output = firstArray.slice(0, secondArray[0])
  output.splice(0, secondArray[1])
  const number = secondArray[2]
  let count = 0

  for (let i = 0; i < output.length; i++) {
    if (output[i] === secondArray[2]) {
      count++
    }
  }

  return `Number ${number} occurs ${count} times.`
}

console.log(searchNumber([5, 2, 3, 4, 1, 3, 6], [6, 2, 3]))

export {}
