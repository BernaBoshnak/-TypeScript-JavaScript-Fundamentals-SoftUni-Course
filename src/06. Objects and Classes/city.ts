interface City {
  [key: string]: string | number
  name: string
  area: string | number
  population: string | number
  country: string
  postCode: string | number
}

function city(
  name: City['name'],
  area: City['area'],
  population: City['population'],
  country: City['country'],
  postCode: City['postCode'],
) {
  const cityObj: City = {
    name: name,
    area: Number(area),
    population: Number(population),
    country: country,
    postCode: Number(postCode),
  }

  for (const key in cityObj) {
    console.log(`${key} -> ${cityObj[key]}`)
  }
}

city('Sofia', '492', '1238438', 'Bulgaria', '1000')

export {}
