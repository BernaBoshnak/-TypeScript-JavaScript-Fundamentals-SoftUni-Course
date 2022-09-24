function palindromeIntegers(array: number[]) {
  const isPalindrom = (text: string) => {
    const length = text.length;
    let isPalindromValue = true;

    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (text[i] !== text[length - 1 - i]) {
        isPalindromValue = false;
        break;
      }
    }
    return isPalindromValue;
  };

  for (const number of array) {
    console.log(isPalindrom(number.toString()));
  }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);

export {};
