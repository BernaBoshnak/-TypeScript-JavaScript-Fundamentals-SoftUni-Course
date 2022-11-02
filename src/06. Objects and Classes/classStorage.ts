type ProductList = {
  name: string
  price: number
  quantity: number
}

interface Storage {
  capacity: number
}

class Storage implements Storage {
  capacity: Storage['capacity']
  storage: ProductList[] = []
  totalCost = 0

  constructor(capacity: Storage['capacity']) {
    this.capacity = capacity
  }

  addProduct(product: ProductList) {
    this.storage.push(product)
    this.capacity -= product.quantity
    this.totalCost += product.quantity * product.price
  }

  getProducts() {
    const output = []
    for (let i = 0; i < this.storage.length; i++) {
      output.push(JSON.stringify(this.storage[i]))
    }
    return output.join('\n')
  }
}

const productOne: ProductList = { name: 'Cucamber', price: 1.5, quantity: 15 }
const productTwo: ProductList = { name: 'Tomato', price: 0.9, quantity: 25 }
const productThree: ProductList = { name: 'Bread', price: 1.1, quantity: 8 }
const storage = new Storage(50)
storage.addProduct(productOne)
storage.addProduct(productTwo)
storage.addProduct(productThree)
console.log(storage.getProducts())
console.log(storage.capacity)
console.log(storage.totalCost)

export {}
