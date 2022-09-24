function sortNumbers(num: number[]) {
  num.sort((a, b) => b - a);
  console.log(num.join("\n"));
}

sortNumbers([2, 1, 3]);
sortNumbers([-2, 1, 3]);
sortNumbers([0, 0, 2]);

export {};
