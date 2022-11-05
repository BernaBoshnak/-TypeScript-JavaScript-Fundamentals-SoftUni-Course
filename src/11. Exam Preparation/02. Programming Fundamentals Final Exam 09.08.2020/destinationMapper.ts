function destinationMapper(destination: string) {
  const pattern = /(=|\/)([A-Z][a-z-A-Z]{2,})\1/g
  let travelPoints = 0
  const destinations: string[] = []
  let match

  while ((match = pattern.exec(destination)) !== null) {
    destinations.push(match[2])
  }
  for (const element of destinations) {
    travelPoints += element.length
  }

  console.log(`Destinations: ${destinations.join(', ')}`)
  console.log(`Travel Points: ${travelPoints}`)
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')

export {}
