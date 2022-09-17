function reverseString(input: string) {
  const newWord = input.split("").reverse().join("");
  console.log(newWord);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");
