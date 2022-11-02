function grades(grade: number) {
  if (grade <= 2.99) {
    return 'Fail (2)'
  } else if (grade <= 3.49) {
    return `Poor (${grade.toFixed(2)})`
  } else if (grade <= 4.49) {
    return `Good (${grade.toFixed(2)})`
  } else if (grade <= 5.49) {
    return `Very good (${grade.toFixed(2)})`
  } else {
    return `Excellent (${grade.toFixed(2)})`
  }
}

console.log(grades(3.33))
console.log(grades(4.5))
console.log(grades(2.99))

export {}
