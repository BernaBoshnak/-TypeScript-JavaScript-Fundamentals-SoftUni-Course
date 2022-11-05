type TownName = string
type TownData = {
  population: number
  gold: number
}
type Events = Record<TownName, TownData>

function pirates(input: Array<string>) {
  const events: Events = {}
  let command = input.shift()

  while (command && command !== 'Sail') {
    const [townName, population, gold] = command.split('||')
    const townData: TownData = {
      population: Number(population),
      gold: Number(gold),
    }

    if (Object.prototype.hasOwnProperty.call(events, townName)) {
      events[townName].population += townData.population
      events[townName].gold += townData.gold
    } else {
      events[townName] = townData
    }
    command = input.shift()
  }
  command = input.shift()

  while (command && command !== 'End') {
    const info = command.split('=>')
    const [commandNext, townName, population, gold] = info
    const key = info.length < 4 ? info[2] : info[3]
    const townData: TownData = {
      population: Number(population),
      gold: Number(gold),
    }

    if (commandNext === 'Plunder') {
      console.log(
        `${townName} plundered! ${townData.gold} gold stolen, ${townData.population} citizens killed.`,
      )

      events[townName].population -= townData.population
      events[townName].gold -= townData.gold
      if (events[townName].population <= 0 || events[townName].gold <= 0) {
        delete events[townName]
        console.log(`${townName} has been wiped off the map!`)
      }
    } else if (commandNext === 'Prosper') {
      if (Number(key) < 0) {
        console.log('Gold added cannot be a negative number!')
      } else {
        events[townName].gold += Number(key)
        console.log(
          `${key} gold added to the city treasury. ${townName} now has ${events[townName].gold} gold.`,
        )
      }
    }
    command = input.shift()
  }
  const workArr = Object.entries(events)

  if (workArr.length === 0) {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
  } else {
    console.log(
      `Ahoy, Captain! There are ${workArr.length} wealthy settlements to go to:`,
    )
    for (const [townName, townData] of workArr) {
      console.log(
        `${townName} -> Population: ${townData.population} citizens, Gold: ${townData.gold} kg`,
      )
    }
  }
}

pirates([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
])

export {}
