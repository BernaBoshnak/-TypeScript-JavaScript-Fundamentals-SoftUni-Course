type Parts = {
  engine: number
  power: number
}

interface Vehicle {
  type: string
  model: string
  fuel: number
  parts: Parts & { quality: number }
}

class Vehicle implements Vehicle {
  type: Vehicle['type']
  model: Vehicle['model']
  parts: Vehicle['parts']
  fuel: Vehicle['fuel']

  constructor(
    type: Vehicle['type'],
    model: Vehicle['model'],
    parts: Parts,
    fuel: Vehicle['fuel'],
  ) {
    this.type = type
    this.model = model
    this.parts = {
      engine: parts['engine'],
      power: parts['power'],
      quality: parts['engine'] * parts['power'],
    }
    this.fuel = fuel
  }

  drive(fuelLoss: Vehicle['fuel']) {
    this.fuel -= fuelLoss
  }
}

const parts: Parts = { engine: 6, power: 100 }
const vehicle = new Vehicle('a', 'b', parts, 200)
vehicle.drive(100)
console.log(vehicle.fuel)
console.log(vehicle.parts.quality)

export {}
