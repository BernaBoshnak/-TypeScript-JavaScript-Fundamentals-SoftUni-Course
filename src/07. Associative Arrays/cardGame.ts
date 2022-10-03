type Players = Record<string, Set<string>>;

function cardGame(array: string[]) {
  const cardsPower = <const>{
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };

  const createPlayers = (array: string[]) => {
    const players: Players = {};

    array.forEach((line) => {
      const [name, deck] = line.split(": ");
      const deckCards = deck.split(", ");

      if (players[name] === undefined) {
        players[name] = new Set();
      }

      deckCards.forEach((card) => {
        players[name].add(card);
      });
    });

    return players;
  };

  const hasPowerKey = (power: string): power is keyof typeof cardsPower => {
    return power in cardsPower;
  };

  const sumDeck = (cardsPowerArr: string[], map: typeof cardsPower) => {
    let sum = 0;

    cardsPowerArr.forEach((card) => {
      const tokens = card.split("");
      const type = tokens.pop();
      const power = tokens.join("");
      if (hasPowerKey(power) && type && hasPowerKey(type)) {
        sum += map[power] * map[type];
      }
    });
    return sum;
  };

  const createPlayersScore = (players: Players, map: typeof cardsPower) => {
    const playersScores: Record<string, ReturnType<typeof sumDeck>> = {};

    Object.entries(players).forEach(([name, cardsPower]) => {
      playersScores[name] = sumDeck(Array.from(cardsPower.values()), map);
    });

    return playersScores;
  };

  const players = createPlayers(array);
  const scoreObject = createPlayersScore(players, cardsPower);

  Object.keys(scoreObject).forEach((key) => {
    console.log(`${key}: ${scoreObject[key]}`);
  });
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

export {};
