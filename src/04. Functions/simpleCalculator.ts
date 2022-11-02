type Operator = 'multiply' | 'divide' | 'add' | 'subtract'

const multiply = (firstOperand: number, secondOperand: number) =>
  firstOperand * secondOperand
const divide = (firstOperand: number, secondOperand: number) =>
  firstOperand / secondOperand
const add = (firstOperand: number, secondOperand: number) =>
  firstOperand + secondOperand
const subtract = (firstOperand: number, secondOperand: number) =>
  firstOperand - secondOperand

function simpleCalculator(
  firstOperand: number,
  secondOperand: number,
  operation: Operator,
) {
  switch (operation) {
    case 'multiply':
      return multiply(firstOperand, secondOperand)
    case 'divide':
      return divide(firstOperand, secondOperand)
    case 'add':
      return add(firstOperand, secondOperand)
    case 'subtract':
      return subtract(firstOperand, secondOperand)
  }
}

console.log(simpleCalculator(5, 5, 'multiply'))
console.log(simpleCalculator(40, 8, 'divide'))
console.log(simpleCalculator(12, 19, 'add'))
console.log(simpleCalculator(50, 13, 'subtract'))

export {}
