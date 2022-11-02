type Info = {
  vip: string[]
  regular: string[]
}

function partyTime(array: Array<string>) {
  const createList = (guestArr: string[]) => {
    const guests: Info = {
      vip: [],
      regular: [],
    }

    guestArr.forEach((guest: string) => {
      if (isNaN(Number(guest[0]))) {
        guests.regular.push(guest)
      } else {
        guests.vip.push(guest)
      }
    })
    return guests
  }

  const removeGuests = (array: string[], guestsObj: Info) => {
    array.forEach((guest) => {
      if (guestsObj.vip.includes(guest)) {
        const index = guestsObj.vip.indexOf(guest)
        guestsObj.vip.splice(index, 1)
      }
      if (guestsObj.regular.includes(guest)) {
        const index = guestsObj.regular.indexOf(guest)
        guestsObj.regular.splice(index, 1)
      }
    })
    return guestsObj
  }

  const createOutput = (guests: Info) => {
    const output = guests.vip.concat(guests.regular)
    return output.length + '\n' + output.join('\n')
  }
  const partyIndex = array.indexOf('PARTY')
  const guestList = createList(array.slice(0, partyIndex))
  const removedList = removeGuests(array.slice(partyIndex + 1), guestList)
  return createOutput(removedList)
}

console.log(
  partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
  ]),
)
console.log(
  partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
  ]),
)

export {}
