function loadingBar(number: number) {
  const temp = number / 10

  if (number === 100) {
    console.log(`${number}% Complete!`)
    console.log(`[${'%'.repeat(temp)}]`)
  } else {
    console.log(`${number}% [${'%'.repeat(temp)}${'.'.repeat(10 - temp)}]`)
    console.log('Still loading...')
  }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)

export {}
