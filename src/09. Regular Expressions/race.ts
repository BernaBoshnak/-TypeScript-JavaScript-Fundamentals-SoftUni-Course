type RaceName = string
type Distance = number
type Racers = Record<RaceName, Distance>

function race(input: Array<string>) {
  const participantList = input.shift()
  const participants = participantList
    ?.split(', ')
    .reduce((acc: Racers, curr: RaceName) => {
      acc[curr] = 0
      return acc
    }, {})

  const namePattern = /[A-Za-z]+/g
  const distancePattern = /\d/g

  input.splice(0, input.indexOf('end of race')).forEach((line: string) => {
    const name = line.match(namePattern)?.join('')
    const distance = line
      .match(distancePattern)
      ?.map(Number)
      .reduce((a, c) => a + c)

    if (
      participants !== undefined &&
      name !== undefined &&
      distance !== undefined
    ) {
      if (Object.prototype.hasOwnProperty.call(participants, name)) {
        participants[name] += distance
      }
    }
  })

  if (participants !== undefined) {
    const output = Object.entries(participants).sort(
      ([, distanceA], [, distanceB]) => distanceB - distanceA,
    )
    return `1st place: ${output[0][0]}\n2nd place: ${output[1][0]}\n3rd place: ${output[2][0]}`
  }
}

console.log(
  race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race',
  ]),
)

export {}
