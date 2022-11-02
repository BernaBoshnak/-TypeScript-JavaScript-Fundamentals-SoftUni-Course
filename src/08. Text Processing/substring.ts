function substring(word: string, startIndex: number, count: number) {
  const result = word.substring(startIndex, count);

  console.log(result);
}

substring("ASentance", 1, 8);

export {};
