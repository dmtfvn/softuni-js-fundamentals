function solveCurTask(arr) {
  let pirateShip = arr.shift().split('>').map(Number);
  const warShip = arr.shift().split('>').map(Number);

  const sectionMaxHealth = Number(arr.shift());

  let i = 0;
  let command = arr[i];

  while (command !== 'Retire') {
    let values = command.split(' ');

    const curCommand = values.shift();

    values = values.map(Number);

    if (curCommand === 'Fire') {
      const [index, damage] = values;

      if (index >= 0 && index < warShip.length) {
        warShip[index] -= damage;

        if (warShip[index] <= 0) {
          console.log('You won! The enemy ship has sunken.');
          return;
        }
      }
    } else if (curCommand === 'Defend') {
      const [indexStart, indexEnd, damage] = values;

      if ((indexStart >= 0 && indexStart < pirateShip.length) && (indexEnd >= 0 && indexEnd < pirateShip.length)) {
        const shipDamageReport = pirateShip.map((value, idx) => {
          if (idx >= indexStart && idx <= indexEnd) {
            value -= damage;
          }

          return value;
        });

        pirateShip = shipDamageReport;
      }

      for (const section of pirateShip) {
        if (section <= 0) {
          console.log('You lost! The pirate ship has sunken.');
          return;
        }
      }
    } else if (curCommand === 'Repair') {
      const [index, health] = values;

      if (index >= 0 && index < pirateShip.length) {
        pirateShip[index] += health;

        if (pirateShip[index] > sectionMaxHealth) {
          pirateShip[index] = sectionMaxHealth;
        }
      }
    } else if (curCommand === 'Status') {
      const sectionMinHealth = sectionMaxHealth * 0.2;

      const sectionStatus = pirateShip.filter((value) => {
        if (value < sectionMinHealth) {
          return value;
        }
      });

      const sectionCount = sectionStatus.length;

      console.log(`${sectionCount} sections need repair.`);
    }

    i++;
    command = arr[i];
  }

  let pirateShipSum = 0;
  let warshipSum = 0;

  for (const pirateShipPart of pirateShip) {
    pirateShipSum += pirateShipPart;
  }

  console.log(`Pirate ship status: ${pirateShipSum}`);

  for (const warShipPart of warShip) {
    warshipSum += warShipPart;
  }

  console.log(`Warship status: ${warshipSum}`);
}

solveCurTask(["2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire"]);