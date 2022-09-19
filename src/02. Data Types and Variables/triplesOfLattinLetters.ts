function triplesOfLattinLetters(num: number) {
  const firstNum = "a".charCodeAt(0);

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let k = 0; k < num; k++) {
        const result = String.fromCharCode(
          firstNum + i,
          firstNum + j,
          firstNum + k
        );

        console.log(result);
      }
    }
  }
}

triplesOfLattinLetters(3);
