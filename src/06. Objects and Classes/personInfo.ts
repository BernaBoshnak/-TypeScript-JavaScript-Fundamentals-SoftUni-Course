interface Person {
  [key: string]: string | number;
  firstName: string;
  lastName: string;
  age: string | number;
}

function personInfo(
  firstName: Person["firstName"],
  lastName: Person["lastName"],
  age: Person["age"]
) {
  const personInfo: Person = {
    firstName: firstName,
    lastName: lastName,
    age: Number(age),
  };

  for (const key in personInfo) {
    console.log(`${key}: ${personInfo[key]}`);
  }
}

personInfo("Peter", "Pan", "20");

export {};
