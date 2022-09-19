function maxSequenceOfEqualElements(array: number[]) {
  let longestSequence = [];
  let leftmostIndex = 0;

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const currentSequence = [currentElement];

    for (let j = i + 1; j < array.length; j++) {
      const nexElement = array[j];

      if (nexElement === currentElement) {
        currentSequence.push(nexElement);
      } else {
        break;
      }
    }
    if (currentSequence.length > longestSequence.length) {
      longestSequence = [];
      for (let b = 0; b < currentSequence.length; b++) {
        longestSequence.push(currentSequence[b]);
      }
    } else if (currentSequence.length === longestSequence.length) {
      if (i < leftmostIndex) {
        leftmostIndex = i;
      }
    }
  }
  console.log(longestSequence.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
