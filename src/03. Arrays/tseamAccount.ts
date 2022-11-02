function tseamAccount(array: string[]) {
  const account = array[0].split(' ')
  let i = 1

  while (array[i] !== 'Play!') {
    const commands = array[i].split(' ')
    const currentCommand = commands[0]
    const nameOfGame = commands[1]

    if (currentCommand === 'Install') {
      let counter = 0
      for (let j = 0; j < account.length; j++) {
        if (nameOfGame === account[j]) {
          counter++
          break
        }
      }
      if (counter === 0) {
        account.push(nameOfGame)
      }
    } else if (currentCommand === 'Uninstall') {
      for (let k = 0; k < account.length; k++) {
        if (nameOfGame === account[k]) {
          account.splice(k, 1)
          break
        }
      }
    } else if (currentCommand === 'Update') {
      for (let l = 0; l < account.length; l++) {
        if (nameOfGame === account[l]) {
          account.splice(l, 1)
          account.push(nameOfGame)
          break
        }
      }
    } else {
      const expansion = nameOfGame.split('-')
      const newNameOfGame = expansion[0]

      for (let b = 0; b < account.length; b++) {
        if (newNameOfGame === account[b]) {
          const expandedGame = expansion.join(':')
          account.splice(b + 1, 0, expandedGame)
          break
        }
      }
    }
    array[i++]
  }
  console.log(account.join(' '))
}

tseamAccount([
  'CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!',
])
tseamAccount([
  'CS WoW Diablo',
  'Uninstall XCOM',
  'Update PeshoGame',
  'Update WoW',
  'Expansion Civ-V',
  'Play!',
])

export {}
