interface Info {
  name: string
  lastName: string
  hairColor: string
}

function convertToJSON(
  name: Info['name'],
  lastName: Info['lastName'],
  hairColor: Info['hairColor'],
) {
  const person: Info = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  }

  console.log(JSON.stringify(person))
}

convertToJSON('George', 'Jones', 'Brown')

export {}
