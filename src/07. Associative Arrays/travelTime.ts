type Info = {
  town: string
  cost: number
}
type Country = string
type Travels = Record<Country, Info[]>

function travelTime(array: Array<string>) {
  const generateDestination = (array: Array<string>) => {
    const travels: Travels = {}

    array.forEach((line) => {
      const [country, town, price] = line.split(' > ')
      const currentPrice = Number(price)

      const info: Info = {
        town,
        cost: currentPrice,
      }

      if (!Object.prototype.hasOwnProperty.call(travels, country)) {
        travels[country] = [info]
      } else {
        const countryInfos = travels[country]

        if (countryInfos) {
          const foundInfo = countryInfos.find((info) => info.town === town)
          if (!foundInfo) {
            countryInfos.push(info)
          } else {
            if (currentPrice < foundInfo.cost) {
              foundInfo.cost = currentPrice
            }
          }
        }
      }
    })

    return travels
  }

  const destination = generateDestination(array)
  const sortedCountries = Object.keys(destination).sort((a, b) =>
    a.localeCompare(b),
  )

  for (const infos of Object.values(destination)) {
    infos.sort((a, b) => a.cost - b.cost)
  }

  const townPrice = (infoArr: Info[]) => {
    return infoArr.map((info) => `${info.town} -> ${info.cost}`).join(' ')
  }

  for (const country of sortedCountries) {
    console.log(`${country} -> ${townPrice(destination[country])}`)
  }
}

travelTime([
  'Bulgaria > Sofia > 500',
  'Bulgaria > Sopot > 800',
  'France > Paris > 2000',
  'Albania > Tirana > 1000',
  'Bulgaria > Sofia > 200',
])

export {}
