function softUniBarIncome(input: Array<string>) {
  let income = 0

  input.slice(0, input.indexOf('end of shift')).forEach((line) => {
    const pattern = /%([A-Z][a-z]+)%.*<(\w+)>.*\|(\d+)\|\D*(\d+\.?\d+)\$/g
    const element = pattern.exec(line)

    if (element !== null) {
      const customerName = element[1]
      const product = element[2]
      const price = Number(element[3]) * Number(element[4])
      income += price

      console.log(`${customerName}: ${product} - ${price.toFixed(2)}`)
    }
  })

  return `Total income: ${income.toFixed(2)}`
}

console.log(
  softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift',
  ]),
)

export {}
