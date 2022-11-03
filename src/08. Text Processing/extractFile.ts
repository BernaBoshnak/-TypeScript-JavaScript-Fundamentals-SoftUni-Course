function extractFile(text: string) {
  const file = text.substring(text.lastIndexOf('\\') + 1)
  const fileName = file.substring(0, file.lastIndexOf('.'))
  const extension = file.substring(file.lastIndexOf('.') + 1)

  return [`File name: ${fileName}`, `File extension: ${extension}`].join('\n')
}

console.log(extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs'))

export {}
