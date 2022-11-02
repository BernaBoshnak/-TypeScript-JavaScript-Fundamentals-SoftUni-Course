function sortAnArrayBy2Criteria(array: string[]) {
  const sorted = array.slice(0).sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b)
    } else {
      return a.length - b.length
    }
  })
  return sorted.join('\n')
}

console.log(sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']))
console.log(
  sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']),
)

export {}
