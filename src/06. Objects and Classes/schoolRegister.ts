type Info = {
  name: string;
  evaluation: number;
};

function schoolRegister(array: string[]) {
  const schoolRegister: Record<number, Info[]> = {};

  for (const line of array) {
    const tokens = line.split(", ");
    const grade = Number(tokens[1].split(": ")[1]) + 1;
    const name = tokens[0].split(": ")[1];
    const evaluation = Number(tokens[2].split(": ")[1]);

    if (evaluation > 3) {
      const student: Info = { name, evaluation };
      if (!Object.prototype.hasOwnProperty.call(schoolRegister, grade)) {
        schoolRegister[grade] = [];
      }
      schoolRegister[grade].push(student);
    }
  }

  const sortedGrades = Object.entries(schoolRegister).sort(
    (gradeA, gradeB) => Number(gradeA[0]) - Number(gradeB[0])
  );

  for (const grade of sortedGrades) {
    const students = grade[1];
    console.log(`${grade[0]} Grade`);
    console.log(`List of students: ${students.map((s) => s.name).join(", ")}`);
    console.log(
      `Average annual grade from last year: ${average(
        students.map((s) => s.evaluation)
      ).toFixed(2)}`
    );
  }

  function average(arr: number[]) {
    return arr.reduce((gradeA, gradeB) => gradeA + gradeB, 0) / arr.length;
  }
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

export {};
