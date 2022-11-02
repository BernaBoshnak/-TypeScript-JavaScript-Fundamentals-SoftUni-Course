function countStringOccurrences(text: string, word: string) {
  const slitted = text.split(" ");

  let count = 0;
  for (const char of slitted) {
    if (char === word) {
      count++;
    }
  }

  console.log(count);
}

countStringOccurrences("This is a word and it also is a sentence", "is");

export {};
