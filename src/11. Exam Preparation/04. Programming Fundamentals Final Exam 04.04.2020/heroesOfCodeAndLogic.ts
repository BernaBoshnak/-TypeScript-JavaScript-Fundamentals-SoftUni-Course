type HeroName = string
type HeroInfo = {
  hp: number
  mp: number
}
type Amount = number
type Heroes = Record<HeroName, HeroInfo>

function heroesOfCodeAndLogic(input: Array<string>) {
  let heroNumber = Number(input.shift())
  const heroes: Heroes = {}

  while (heroNumber > 0) {
    const data = input.shift()

    if (data) {
      const [heroName, health, mana] = data.split(' ')
      const heroData: HeroInfo = {
        hp: Number(health),
        mp: Number(mana),
      }
      heroes[heroName] = heroData
      heroNumber--
    }
  }
  let command = input.shift()
  while (command && command !== 'End') {
    type Commands = 'CastSpell' | 'TakeDamage' | 'Recharge' | 'Heal'
    const tokens = command.split(' - ')
    switch (tokens[0] as Commands) {
      case 'CastSpell':
        castSpell(tokens[1], Number(tokens[2]), tokens[3])
        break
      case 'TakeDamage':
        takeDamage(tokens[1], Number(tokens[2]), tokens[3])
        break
      case 'Recharge':
        recharge(tokens[1], Number(tokens[2]))
        break
      case 'Heal':
        heal(tokens[1], Number(tokens[2]))
        break
    }
    command = input.shift()
  }

  function castSpell(
    heroName: HeroName,
    mpNeeded: number,
    spellName: HeroName,
  ) {
    if (heroes[heroName].mp - mpNeeded >= 0) {
      heroes[heroName].mp -= mpNeeded
      console.log(
        `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`,
      )
    } else {
      console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
    }
  }

  function takeDamage(heroName: HeroName, damage: Amount, attacker: HeroName) {
    if (heroes[heroName].hp - damage > 0) {
      heroes[heroName].hp -= damage
      console.log(
        `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`,
      )
    } else {
      delete heroes[heroName]
      console.log(`${heroName} has been killed by ${attacker}!`)
    }
  }

  function recharge(heroName: HeroName, amount: Amount) {
    if (heroes[heroName].mp + amount > 200) {
      const amountRecovered = 200 - heroes[heroName].mp
      heroes[heroName].mp = 200
      console.log(`${heroName} recharged for ${amountRecovered} MP!`)
    } else {
      heroes[heroName].mp += amount
      console.log(`${heroName} recharged for ${amount} MP!`)
    }
  }

  function heal(heroName: HeroName, amount: Amount) {
    if (heroes[heroName].hp + amount > 100) {
      const amountRecovered = 100 - heroes[heroName].hp
      heroes[heroName].hp = 100
      console.log(`${heroName} healed for ${amountRecovered} HP!`)
    } else {
      heroes[heroName].hp += amount
      console.log(`${heroName} healed for ${amount} HP!`)
    }
  }
  const convertToArr = Object.entries(heroes)

  for (const [heroName, heroInfo] of convertToArr) {
    console.log(heroName)
    console.log(`  HP: ${heroInfo.hp}`)
    console.log(`  MP: ${heroInfo.mp}`)
  }
}

heroesOfCodeAndLogic([
  '2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End',
])

export {}
