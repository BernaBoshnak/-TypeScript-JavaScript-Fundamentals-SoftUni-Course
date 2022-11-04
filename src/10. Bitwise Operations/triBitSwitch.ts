function triBitSwitch(input: number, position: number) {
  const mask = 7 << position
  const result = input ^ mask

  console.log(result)
}

triBitSwitch(44444, 4)

export {}
