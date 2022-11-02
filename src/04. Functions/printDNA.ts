function printDNA(number: number) {
  const sequence = 'ATCGTTAGGG'.split('')

  for (let i = 1; i <= number; i++) {
    const [a, b] = sequence.splice(0, 2)
    if (i === 1 || i % 4 === 1) {
      console.log(`**${a}${b}**`)
    } else if (i === 2 || i % 4 === 2) {
      console.log(`*${a}--${b}*`)
    } else if (i === 3 || i % 4 === 3) {
      console.log(`${a}----${b}`)
    } else {
      console.log(`*${a}--${b}*`)
    }
    sequence.push(a)
    sequence.push(b)
  }
}

printDNA(4)
printDNA(10)

export {}
