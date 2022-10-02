function neighborhoods(array: Array<string>) {
  const map = new Map<string, string[]>();
  const neighborhoods = array[0].split(", ");

  for (const neighborhood of neighborhoods) {
    map.set(neighborhood, []);
  }

  for (let i = 1; i < array.length; i++) {
    const [neighborhood, person] = array[i].split(" - ");

    if (map.has(neighborhood)) {
      const currentNeighborhood = map.get(neighborhood);
      if (currentNeighborhood !== undefined) {
        currentNeighborhood.push(person);
      }
    }
  }

  const sorted = Array.from(map).sort(([, personsA], [, personsB]) => {
    return personsB.length - personsA.length;
  });

  for (const [neighborhood, person] of sorted) {
    console.log(`${neighborhood}: ${person.length}`);
    person.forEach((person) => console.log(`--${person}`));
  }
}

neighborhoods([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);

export {};
