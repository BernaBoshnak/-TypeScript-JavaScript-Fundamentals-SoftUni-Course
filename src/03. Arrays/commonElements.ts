function commonElements(firstArray: string[], secondArray: string[]) {
  firstArray.map((element) => {
    if (secondArray.includes(element)) {
      console.log(element);
    }
  });
}

commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
