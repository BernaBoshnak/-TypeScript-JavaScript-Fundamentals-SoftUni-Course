type ArithmeticOperators = "+" | "-" | "*" | "/" | "%";

function calculator(
  firstNum: number,
  operator: ArithmeticOperators,
  secondNum: number
) {
  switch (operator) {
    case "+":
      return (firstNum + secondNum).toFixed(2);
    case "-":
      return (firstNum - secondNum).toFixed(2);
    case "*":
      return (firstNum * secondNum).toFixed(2);
    case "/":
      return (firstNum / secondNum).toFixed(2);
    case "%":
      return (firstNum % secondNum).toFixed(2);
  }
}

console.log(calculator(5, "+", 10));
console.log(calculator(25.5, "-", 3));
console.log(calculator(22, "*", 7));
console.log(calculator(30, "/", 3));
