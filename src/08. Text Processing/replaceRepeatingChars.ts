function replaceRepeatingChars(text: string) {
  return text
    .split('')
    .filter((letter, i, array) => letter !== array[i + 1])
    .join('')
}

console.log(replaceRepeatingChars('qqqwerqwecccwd'))

export {}
