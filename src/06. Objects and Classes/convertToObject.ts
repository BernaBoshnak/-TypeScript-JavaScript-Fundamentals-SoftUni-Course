function convertToObject<T extends string>(jsonStr: T) {
  const info = JSON.parse(jsonStr);

  for (const key in info) {
    console.log(`${key}: ${info[key]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

export {};
