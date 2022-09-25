function train(array: string[]) {
  let wagons = array
    .shift()
    ?.split(" ")
    .map((b) => Number(b));
  const maxCap = Number(array.shift());

  for (let i = 0; i < array.length; i++) {
    const command = array[i].split(" ");

    if (command.length === 2) {
      wagons?.push(Number(command[1]));
    } else {
      const passengersToAdd = Number(command[0]);
      let firstIndex = false;
      wagons = wagons?.map((x) => {
        if (passengersToAdd + x <= maxCap && firstIndex === false) {
          x += passengersToAdd;
          firstIndex = true;
          return x;
        }
        return x;
      });
    }
  }
  return wagons?.join(" ");
}

console.log(
  train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"])
);
console.log(
  train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"])
);

export {};
