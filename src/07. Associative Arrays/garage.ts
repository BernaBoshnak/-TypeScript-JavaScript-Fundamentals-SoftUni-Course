type Garage = number
type Info = string

function garage(array: Array<string>) {
  const garages = new Map<Garage, Info[]>()

  for (const line of array) {
    const [numGarage, info] = line.split(' - ')
    const garage = Number(numGarage)

    if (!garages.has(garage)) {
      garages.set(garage, [info])
    } else {
      const availableCars = garages.get(garage)
      if (availableCars !== undefined) {
        availableCars.push(info)
        garages.set(garage, availableCars)
      }
    }
  }

  const sortedGarages = [...garages.entries()].sort((a, b) => a[0] - b[0])

  let output = ''
  for (const [garage, info] of sortedGarages) {
    output += `Garage № ${garage}\n`
    for (let el of info) {
      el = el.replace(/: /g, ' - ')
      output += `--- ${el}\n`
    }
  }

  console.log(output)
}

garage([
  '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
])

export {}
