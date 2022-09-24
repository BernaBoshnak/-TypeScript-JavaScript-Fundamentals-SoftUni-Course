function sorting(array: number[]) {
  const output = [];
  const sortedArray = array.slice(0).sort((a, b) => a - b);

  while (sortedArray.length !== 0) {
    output.push(sortedArray.pop());
    output.push(sortedArray.shift());
  }

  return output.join(" ");
}

console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));

export {};
