function solveCurTask(arr) {
  const cardPower = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  };

  const cardType = {
    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1
  };

  const playerCards = new Map();

  for (const curPlayer of arr) {
    const playerInfo = curPlayer.split(': ');

    const player = playerInfo[0];
    const cards = playerInfo[1].split(', ');

    const uniqueCards = [...new Set(cards)];

    if (playerCards.has(player)) {
      const curDeck = playerCards.get(player);

      for (const card of cards) {
        if (!curDeck.includes(card)) {
          curDeck.push(card);
        }
      }
    } else {
      playerCards.set(player, uniqueCards);
    }
  }

  const newArr = playerCards.entries();

  for (const [name, deck] of newArr) {
    let playerFinalResult = 0;

    for (const powerType of deck) {
      let power = 0;
      let type = 0;

      if (powerType.length === 3) {
        power = powerType.substring(0, 2);
        type = powerType.substring(2);
      } else {
        power = powerType[0];
        type = powerType[1];
      }

      const playerCurResult = cardPower[power] * cardType[type];

      playerFinalResult += playerCurResult;
    }

    console.log(`${name}: ${playerFinalResult}`);
  }
}

solveCurTask([
  'John: 2C, 4H, 9H, AS, QS',
  'Slav: 3H, 10S, JC, KD, 5S, 10S',
  'Alex: 6H, 7S, KC, KD, 5S, 10C',
  'Thomas: QH, QC, JS, JD, JC',
  'Slav: 6H, 7S, KC, KD, 5S, 10C',
  'Thomas: QH, QC, JS, JD, JC',
  'Alex: 6H, 7S, KC, KD, 5S, 10C',
  'Thomas: QH, QC, JS, JD, JC',
  'John: JD, JD, JD, JD'
  ]);