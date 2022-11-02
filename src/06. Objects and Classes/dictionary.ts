function dictionary(array: Array<string>) {
  const dictionary: Record<string, unknown> = {}

  for (let i = 0; i < array.length; i++) {
    const element = JSON.parse(array[i])
    const currentEl = Object.entries(element)[0]
    dictionary[currentEl[0]] = currentEl[1]
  }

  const sortedDictionary: Record<string, unknown> = {}
  for (const key of Object.keys(dictionary).sort((a, b) =>
    a.localeCompare(b),
  )) {
    sortedDictionary[key] = dictionary[key]
  }

  for (const term in sortedDictionary) {
    if (sortedDictionary.hasOwnProperty.call(sortedDictionary, term)) {
      const definition = sortedDictionary[term]
      console.log(`Term: ${term} => Definition: ${definition}`)
    }
  }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
])

export {}
