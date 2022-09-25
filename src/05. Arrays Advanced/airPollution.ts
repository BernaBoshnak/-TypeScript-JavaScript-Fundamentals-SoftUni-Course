function breeze(arr: Array<number[]>, command: string[]) {
  const row = Number(command.shift());
  for (let col = 0; col < arr.length; col++) {
    const currentValue = arr[row][col];
    const result = currentValue - 15;
    result >= 0 ? (arr[row][col] = result) : (arr[row][col] = 0);
  }
  return arr;
}

function gale(arr: Array<number[]>, command: string[]) {
  const col = Number(command.shift());
  for (let row = 0; row < arr.length; row++) {
    const currentValue = arr[row][col];
    const result = currentValue - 20;
    result >= 0 ? (arr[row][col] = result) : (arr[row][col] = 0);
  }
  return arr;
}

function smog(arr: Array<number[]>, command: string[]) {
  const increase = Number(command.shift());
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      arr[row][col] += increase;
    }
  }
  return arr;
}

function airPollution(array: string[], commands: string[]) {
  let mapOfSofia = array.map((number) => number.split(" ").map(Number));

  while (commands.length > 0) {
    const currentCommand = commands.shift();
    const command = currentCommand?.split(" ");
    switch (command?.shift()) {
      case "breeze":
        mapOfSofia = breeze(mapOfSofia, command);
        break;
      case "gale":
        mapOfSofia = gale(mapOfSofia, command);
        break;
      case "smog":
        mapOfSofia = smog(mapOfSofia, command);
        break;
    }
  }
  let isPolluted = false;
  let result = "";

  for (let row = 0; row < mapOfSofia.length; row++) {
    for (let col = 0; col < mapOfSofia.length; col++) {
      const currentValue = mapOfSofia[row][col];
      if (currentValue >= 50) {
        result += `[${row}-${col}], `;
        isPolluted = true;
      }
    }
  }

  if (isPolluted) {
    return `Polluted areas: ${result.slice(0, -2)}`;
  } else {
    return "No polluted areas";
  }
}

console.log(
  airPollution(
    [
      "5 7 72 14 4",
      "41 35 37 27 33",
      "23 16 27 42 12",
      "2 20 28 39 14",
      "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
  )
);
console.log(
  airPollution(
    [
      "5 7 3 28 32",
      "41 12 49 30 33",
      "3 16 20 42 12",
      "2 20 10 39 14",
      "7 34 4 27 24",
    ],
    ["smog 11", "gale 3", "breeze 1", "smog 2"]
  )
);
console.log(
  airPollution(
    [
      "5 7 2 14 4",
      "21 14 2 5 3",
      "3 16 7 42 12",
      "2 20 8 39 14",
      "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
  )
);

export {};
