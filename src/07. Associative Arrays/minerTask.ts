type Resource = string
type Quantity = number

function minerTask(array: Array<string>) {
  const resourceAndQuantity = new Map<Resource, Quantity>()

  for (let i = 0; i < array.length; i += 2) {
    const resource = array[i]
    const quantity = parseInt(array[i + 1])

    if (!resourceAndQuantity.has(resource)) {
      resourceAndQuantity.set(resource, quantity)
    } else {
      let availableQuantity = resourceAndQuantity.get(resource)
      if (availableQuantity != undefined) {
        availableQuantity += quantity
        resourceAndQuantity.set(resource, availableQuantity)
      }
    }
  }

  for (const [resource, quantity] of [...resourceAndQuantity.entries()]) {
    if (resourceAndQuantity.has(resource)) {
      console.log(`${resource} -> ${quantity}`)
    }
  }
}

minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])

export {}
