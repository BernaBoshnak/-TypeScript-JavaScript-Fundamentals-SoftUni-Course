function triangleOfNumbers(number: number) {
  for (let i = 1; i <= number; i++) {
    console.log(`${i} `.repeat(i));
  }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);
