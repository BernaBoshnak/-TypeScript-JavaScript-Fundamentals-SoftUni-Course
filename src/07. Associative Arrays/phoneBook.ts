function phoneBook(array: Array<string>) {
  const phoneNumbers: Record<string, string> = {};

  for (const record of array) {
    const [name, phoneNumber] = record.split(" ");
    phoneNumbers[name] = phoneNumber;
  }
  for (const key in phoneNumbers) {
    console.log(`${key} -> ${phoneNumbers[key]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

export {};
