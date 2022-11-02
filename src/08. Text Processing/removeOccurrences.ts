function removeOccurrences(word: string, text: string) {
  while (text.indexOf(word) >= 0) {
    text = text.replace(word, "");
  }

  console.log(text);
}

removeOccurrences("ice", "kicegiciceeb");

export {};
