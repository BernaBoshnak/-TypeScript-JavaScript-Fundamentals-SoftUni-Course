type CarName = string
type CarData = {
  mileage: number
  fuel: number
}
type Cars = Record<CarName, CarData>

function needForSpeed(input: Array<string>) {
  let carNum = Number(input.shift())
  const cars: Cars = {}

  while (carNum > 0) {
    const data = input.shift()

    if (data) {
      const [carName, mileage, fuel] = data.split('|')
      const carsData: CarData = {
        mileage: Number(mileage),
        fuel: Number(fuel),
      }

      if (!Object.prototype.hasOwnProperty.call(cars, carName)) {
        cars[carName] = carsData
      }

      carNum--
    }
  }
  let command = input.shift()

  while (command && command !== 'Stop') {
    type Commands = 'Drive' | 'Refuel' | 'Revert'
    const tokens = command.split(' : ')

    switch (tokens[0] as Commands) {
      case 'Drive':
        drive(tokens[1], Number(tokens[2]), Number(tokens[3]))
        break
      case 'Refuel':
        refuel(tokens[1], Number(tokens[2]))
        break
      case 'Revert':
        revert(tokens[1], Number(tokens[2]))
        break
    }
    command = input.shift()
  }

  function drive(carName: CarName, distance: number, fuel: number) {
    if (fuel > cars[carName].fuel) {
      console.log('Not enough fuel to make that ride')
    } else {
      cars[carName].mileage += distance
      cars[carName].fuel -= fuel
      console.log(
        `${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`,
      )
    }
    if (cars[carName].mileage >= 100000) {
      console.log(`Time to sell the ${carName}!`)
      delete cars[carName]
    }
  }

  function refuel(carName: CarName, fuel: number) {
    if (cars[carName].fuel + fuel <= 75) {
      cars[carName].fuel += fuel
      console.log(`${carName} refueled with ${fuel} liters`)
    } else {
      console.log(`${carName} refueled with ${75 - cars[carName].fuel} liters`)
      cars[carName].fuel = 75
    }
  }

  function revert(carName: CarName, kilometers: number) {
    const amountReverted = (cars[carName].mileage -= kilometers)
    if (amountReverted <= 10000) {
      cars[carName].mileage = 10000
    } else {
      console.log(`${carName} mileage decreased by ${kilometers} kilometers`)
    }
  }
  const convertToArr = Object.entries(cars)

  for (const [carName, carData] of convertToArr) {
    console.log(
      `${carName} -> Mileage: ${carData.mileage} kms, Fuel in the tank: ${carData.fuel} lt.`,
    )
  }
}

needForSpeed([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop',
])

export {}
