function repeatString(string: string, count: number) {
  let result = ''

  for (let i = 0; i < count; i++) {
    result += string
  }
  return result
}

console.log(repeatString('abc', 3))
console.log(repeatString('String', 2))

export {}
