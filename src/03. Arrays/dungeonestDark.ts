let health = 100;
let coins = 0;
let bestRoom = 0;

function dungeonestDark(array: string[]) {
  const dungeon = array[0].split("|");

  for (const room of dungeon) {
    const tokens = room.split(" ");
    const encountered = tokens[0];
    const value = Number(tokens[1]);
    if (encountered === "potion") {
      if (health + value > 100) {
        console.log(`You healed for ${100 - health} hp.`);
        health = 100;
      } else {
        console.log(`You healed for ${value} hp.`);
        health += value;
      }
      console.log(`Current health: ${health} hp.`);
      bestRoom++;
    } else if (encountered === "chest") {
      coins += value;
      console.log(`You found ${value} coins.`);
      bestRoom++;
    } else {
      health -= value;
      if (health <= 0) {
        console.log(`You died! Killed by ${encountered}.`);
        bestRoom++;
        console.log(`Best room: ${bestRoom}`);
        break;
      } else {
        console.log(`You slayed ${encountered}.`);
        bestRoom++;
      }
    }
  }
  if (bestRoom === dungeon.length) {
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
  }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

export {};
