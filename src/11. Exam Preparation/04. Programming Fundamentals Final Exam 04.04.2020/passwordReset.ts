function passwordReset(input: Array<string>) {
  let password = input.shift()
  input.pop()

  for (const line of input) {
    type Commands = 'TakeOdd' | 'Cut' | 'Substitute'
    const tokens = line.split(' ')
    const command = tokens.shift() as Commands

    switch (command) {
      case 'TakeOdd':
        if (password) {
          takeOdd(password)
        }
        break
      case 'Cut':
        cut(Number(tokens[0]), Number(tokens[1]))
        break
      case 'Substitute':
        substitute(tokens[0], tokens[1])
        break
    }
  }

  function takeOdd(input: string) {
    let newpassword = ''
    for (let i = 0; i < input.length; i++) {
      if (i % 2) {
        newpassword += input[i]
      }
    }
    password = newpassword
    console.log(password)
  }

  function cut(index: number, length: number) {
    if (password) {
      const cutpassword =
        password.substring(0, index) + password.substring(index + length)
      password = cutpassword
      console.log(password)
    }
  }

  function substitute(substring: string, substitute: string) {
    if (password && password.includes(substring)) {
      password = password.split(substring).join(substitute)
      console.log(password)
    } else {
      console.log('Nothing to replace!')
    }
  }
  return `Your password is: ${password}`
}

console.log(
  passwordReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done',
  ]),
)

export {}
