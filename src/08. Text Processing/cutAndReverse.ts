function cutAndReverse(letters: string) {
  return [
    letters
      .substring(0, letters.length / 2)
      .split("")
      .reverse()
      .join(""),
    letters
      .substring(letters.length / 2)
      .split("")
      .reverse()
      .join(""),
  ].join("\n");
}

console.log(cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT"));

export {};
