type FirstCommand = "soap";
type WashCommand = FirstCommand | "vacuum cleaner" | "mud" | "water";
type CommandsArray = {
  0: FirstCommand;
} & ArrayLike<WashCommand>;

enum CommandPercentage {
  "soap" = 10,
  "water" = 20,
  "vacuum_cleaner" = 25,
  "mud" = 10,
}

function carWash(array: CommandsArray) {
  const cleaningTheCar = (array: CommandsArray) => {
    let value = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === "soap") {
        value += CommandPercentage.soap;
      } else if (array[i] === "water") {
        value += value * (CommandPercentage.soap / 100);
      } else if (array[i] === "vacuum cleaner") {
        value += value * (CommandPercentage.vacuum_cleaner / 100);
      } else {
        value -= value * (CommandPercentage.mud / 100);
      }
    }

    return value;
  };

  const result = cleaningTheCar(array);
  return `The car is ${result.toFixed(2)}% clean.`;
}

console.log(
  carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"])
);

export {};
