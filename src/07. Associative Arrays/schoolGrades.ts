function schoolGrades(array: string[]) {
  const schoolGrades = new Map<string, Array<number>>();

  for (const line of array) {
    const tokens = line.split(" ");
    const name = tokens[0];
    const currentGrades = tokens.splice(1, tokens.length).map(Number);

    if (!schoolGrades.has(name)) {
      schoolGrades.set(name, []);
    }

    const grades = schoolGrades.get(name);

    if (grades !== undefined) {
      schoolGrades.set(name, grades.concat(currentGrades));
    }
  }

  const sorted = Array.from(schoolGrades).sort(([, gradesA], [, gradesB]) =>
    average(gradesA, gradesB)
  );

  function average<T extends number[]>(firstNum: T, secondNum: T) {
    const firstSum = firstNum.reduce((a, b) => a + b, 0);
    const secondSum = secondNum.reduce((a, b) => a + b, 0);

    const firstAverage = firstSum / firstNum.length;
    const secondAverage = secondSum / secondNum.length;
    return firstAverage - secondAverage;
  }

  for (const [name, grades] of sorted) {
    console.log(`${name}: ${grades.join(" ")}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);

// export {};
