function reverseAnArrayOfStrings(input: string[]) {
  let letters = input;
  const newLetters = [];

  for (let i = letters.length - 1; i >= 0; i--) {
    newLetters.push(letters[i]);
  }
  letters = newLetters;
  console.log(letters.join(" "));
}

reverseAnArrayOfStrings(["a", "b", "c", "d", "e"]);
reverseAnArrayOfStrings(["abc", "def", "hig", "klm", "nop"]);
reverseAnArrayOfStrings(["33", "123", "0", "dd"]);

export {};
