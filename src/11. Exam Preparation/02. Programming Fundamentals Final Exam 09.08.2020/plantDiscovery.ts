type PlantName = string
type Rarity = {
  rarity: number
  rating: number[]
}
type InfoPlants = Record<PlantName, Rarity>

function plantDiscovery(input: Array<string>) {
  let number = Number(input.shift())
  const infoPlants: InfoPlants = {}

  while (number > 0) {
    const data = input.shift()

    if (data) {
      const [plantName, rarity] = data.split('<->')
      const plantsData: Rarity = {
        rarity: Number(rarity),
        rating: [],
      }

      if (!Object.prototype.hasOwnProperty.call(infoPlants, plantName)) {
        infoPlants[plantName] = plantsData
      }
      number--
    }
  }

  let line = input.shift()
  while (line && line !== 'Exhibition') {
    type Commands = 'Rate' | 'Update' | 'Reset'
    const lineArr = line.split(': ')
    const command = lineArr[0] as Commands
    const [plant, givenRating] = lineArr[1].split(' - ')
    const rating = Number(givenRating)

    if (Object.prototype.hasOwnProperty.call(infoPlants, plant)) {
      switch (command) {
        case 'Rate':
          rate(plant, rating)
          break
        case 'Update':
          update(plant, rating)
          break
        case 'Reset':
          reset(plant)
          break
      }
      line = input.shift()
    } else {
      console.log('error')
    }
  }

  function rate(plant: PlantName, rating: number) {
    infoPlants[plant].rating.push(rating)
  }

  function update(plant: PlantName, new_rarity: number) {
    infoPlants[plant].rarity = new_rarity
  }

  function reset(plant: PlantName) {
    infoPlants[plant].rating = [0]
  }

  const sorted = Object.entries(infoPlants)
  sorted.forEach((line: [string, Rarity]) => {
    if (line[1].rating.length !== 0) {
      const count = line[1].rating.length
      const total = line[1].rating.reduce((a, b) => a + b)
      line[1].rating = [total / count]
    }
  })

  console.log('Plants for the exhibition:')
  for (const [plant, rarity] of sorted) {
    console.log(
      `- ${plant}; Rarity: ${rarity.rarity}; Rating: ${rarity.rating.map((x) =>
        x.toFixed(2),
      )}`,
    )
  }
}

plantDiscovery([
  '3',
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition',
])

export {}
