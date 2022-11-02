function factorialDivision(firstNum: number, secondNum: number) {
  const factorial = (num: number) => {
    let result = 1
    for (let i = 1; i <= num; i++) {
      result *= i
    }
    return result
  }

  const factorialOne = factorial(firstNum)
  const factorialTwo = factorial(secondNum)
  const result = factorialOne / factorialTwo
  console.log(result.toFixed(2))
}

factorialDivision(5, 2)
factorialDivision(6, 2)

export {}
