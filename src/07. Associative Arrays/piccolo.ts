function piccolo(array: string[]) {
  const fillParkinfInfo = (array: string[]) => {
    const parking: Record<string, string> = {};

    array.forEach((line) => {
      const [direction, carNumber] = line.split(", ");
      parking[carNumber] = direction;
    });
    return parking;
  };

  const filterCarsIn = (parking: Record<string, string>) => {
    const output: string[] = [];
    Object.entries(parking).forEach(([carNumber, direction]) => {
      if (direction === "IN") {
        output.push(carNumber);
      }
    });
    return output;
  };

  const getOutput = (array: string[]) => {
    return array.length === 0
      ? "Parking Lot is Empty"
      : array
          .sort((carNumberA, carNumberB) =>
            carNumberA.localeCompare(carNumberB)
          )
          .join("\n");
  };

  const parking = fillParkinfInfo(array);
  const output = filterCarsIn(parking);

  return getOutput(output);
}

console.log(
  piccolo([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
  ])
);
console.log(
  piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"])
);

export {};
