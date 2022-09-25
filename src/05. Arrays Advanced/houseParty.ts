function houseParty(array: string[]) {
  let output: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i].split(" ");
    const name = current[0];
    const command = current[2];

    if (command !== "not") {
      if (output.includes(name) === true) {
        console.log(`${name} is already in the list!`);
        continue;
      }
      output.push(name);
    } else {
      if (output.includes(name) === false) {
        console.log(`${name} is not in the list!`);
        continue;
      }
      output = output.filter((x) => x !== name);
    }
  }

  return output.join("\n");
}

console.log(
  houseParty([
    "Allie is going!",
    "George is going!",
    "John is not going!",
    "George is not going!",
  ])
);
console.log(
  houseParty([
    "Tom is going!",
    "Annie is going!",
    "Tom is going!",
    "Garry is going!",
    "Jerry is going!",
  ])
);

export {};
