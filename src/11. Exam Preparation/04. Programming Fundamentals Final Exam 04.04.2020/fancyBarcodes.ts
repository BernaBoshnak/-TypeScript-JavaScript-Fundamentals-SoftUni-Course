function fancyBarcodes(input: Array<string>) {
  const patternBarcode = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])\1/
  const patternDigit = /\d/

  input.shift()
  input.forEach((barcode) => {
    if (patternBarcode.test(barcode)) {
      const productGroup = [...barcode]
        .filter((ch) => patternDigit.test(ch))
        .join('')

      if (productGroup !== '') {
        console.log(`Product group: ${productGroup}`)
      } else {
        console.log('Product group: 00')
      }
    } else {
      console.log('Invalid barcode')
    }
  })
}

fancyBarcodes([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
])

export {}
