function charactersInRange(start: string, end: string) {
  let startValue = start.charCodeAt(0)
  let endValue = end.charCodeAt(0)

  if (startValue > endValue) {
    const temp = startValue
    startValue = endValue
    endValue = temp
  }

  let result = ''
  for (let i = startValue + 1; i < endValue; i++) {
    result += String.fromCharCode(i) + ' '
  }
  return result
}

console.log(charactersInRange('a', 'd'))
console.log(charactersInRange('#', ':'))
console.log(charactersInRange('C', '#'))

export {}
