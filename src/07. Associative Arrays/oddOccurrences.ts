function oddOccurrences(input: string) {
  const array = input.toLowerCase().split(' ')
  const words: Record<string, number> = {}

  array.forEach((word) => {
    if (!words[word]) {
      words[word] = 0
    }
    words[word] += 1
  })

  const output: string[] = []

  Object.entries(words).forEach((word) => {
    if (word[1] % 2) {
      output.push(word[0])
    }
  })

  console.log(output.join(' '))
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

export {}
