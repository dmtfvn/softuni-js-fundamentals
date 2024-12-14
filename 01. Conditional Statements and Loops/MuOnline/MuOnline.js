function solveCurTask(str) {
  const totalRooms = str.split('|');

  let health = 100;
  let bitcoins = 0;
  let roomCount = 1;

  for (const singleRoom of totalRooms) {
    const roomElems = singleRoom.split(' ');

    const content = roomElems[0];
    const value = Number(roomElems[1]);

    if (content === 'potion') {
      let healthAdded = value;

      if (health + healthAdded > 100) {
        healthAdded = 100 - health;
      }

      health += healthAdded;

      console.log(`You healed for ${healthAdded} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (content === 'chest') {
      bitcoins += value;

      console.log(`You found ${value} bitcoins.`);
    } else {
      const monsterType = content;
      const monsterAttack = value;

      health -= monsterAttack;

      if (health > 0) {
        console.log(`You slayed ${monsterType}.`);
      } else {
        console.log(`You died! Killed by ${monsterType}.`);
        console.log(`Best room: ${roomCount}`);
        break;
      }
    }

    roomCount++;
  }

  if (health > 0) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}

solveCurTask("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");