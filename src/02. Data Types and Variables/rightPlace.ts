function rightPlace(string: string, char: string, result: string) {
  const word = string.replace("_", char);
  const output = word === result ? "Matched" : "Not Matched";

  console.log(output);
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");

export {};
