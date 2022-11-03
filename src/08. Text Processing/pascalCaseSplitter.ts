function pascalCaseSplitter(text: string) {
  let capitalIndex = -1
  const output = []

  for (let i = 0; i < text.length; i++) {
    const letter = text[i]

    if (letter.toLowerCase() !== letter && i !== 0) {
      const word = text.substring(capitalIndex, i)
      capitalIndex = i
      output.push(word)
    }
  }

  output.push(text.substring(capitalIndex))
  return output.join(', ')
}

console.log(pascalCaseSplitter('ThisIsSoAnnoyingToDo'))

export {}
