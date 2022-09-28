function inventory(array: string[]) {
  const heroes = [];

  while (array.length > 0) {
    const line = array.shift()?.split(" / ");
    if (line) {
      const hero = {
        name: line[0],
        level: Number(line[1]),
        items: line[2]
          .split(", ")
          .sort((a, b) => a.localeCompare(b))
          .join(", "),
      };
      heroes.push(hero);
    }
  }
  heroes.sort((firstHero, secondHero) => {
    return firstHero.level - secondHero.level;
  });
  const output: string[] = [];

  for (const hero of heroes) {
    const result = `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`;
    output.push(result);
  }

  return output.join("\n");
}

console.log(
  inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
console.log(
  inventory([
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
  ])
);

export {};
