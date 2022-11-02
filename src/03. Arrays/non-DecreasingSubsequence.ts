function nonDecreasingSubsequence(array: number[]) {
  let currentBiggestNum = array[0]
  const result = array.filter((element) => {
    if (element >= currentBiggestNum) {
      currentBiggestNum = element
    }
    return element >= currentBiggestNum
  })
  console.log(result.join(' '))
}

nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubsequence([1, 2, 3, 4])
nonDecreasingSubsequence([20, 3, 2, 15, 6, 1])

export {}
