function furniture(input: Array<string>) {
  const pattern = />>([A-Za-z]+)<<(\d+\.?\d+)!(\d+)/g
  const lines = input.slice(0, input.indexOf('Purchase')).join('\n')
  const array = Array.from(lines.matchAll(pattern))
  let names = `Bought furniture:`
  let cost = 0

  array.forEach((match) => {
    names += '\n' + match[1]
    cost += Number(match[2]) * Number(match[3])
  })

  console.log(names + `\nTotal money spend: ${cost.toFixed(2)}`)
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])

export {}
