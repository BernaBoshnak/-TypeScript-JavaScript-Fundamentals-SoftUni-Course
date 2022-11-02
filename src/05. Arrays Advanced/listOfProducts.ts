type Product = 'Potatoes' | 'Tomatoes' | 'Onions' | 'Apples'

function listOfProducts(product: Array<Product>) {
  const sorted = product.sort()
  for (let i = 0; i < product.length; i++) {
    console.log(`${i + 1}.${sorted[i]}`)
  }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])

export {}
