type Items = {
  itemName: string
  date: string
  calories: number
}

function adAstra(input: Array<string>) {
  const dayCalorie = 2000
  let kcal = 0
  const items: Items[] = []

  input.forEach((line) => {
    const pattern =
      /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d{1,5})\1/g
    let match = pattern.exec(line)

    while (match) {
      items.push({
        itemName: match[2],
        date: match[3],
        calories: Number(match[4]),
      })
      kcal += Number(match[4])
      match = pattern.exec(input[0])
    }

    const days = Math.trunc(kcal / dayCalorie)
    console.log(`You have food to last you for: ${days} days!`)

    for (let i = 0; i < items.length; i++) {
      console.log(
        `Item: ${items[i].itemName}, Best before: ${items[i].date}, Nutrition: ${items[i].calories}`,
      )
    }
  })
}

adAstra([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|',
])

export {}
