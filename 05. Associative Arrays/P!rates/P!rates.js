function solveCurTask(arr) {
  const totalCities = {};

  let curRow = arr.shift();

  while (curRow !== 'Sail') {
    const tokens = curRow.split('||');

    const [name, population, gold] = tokens;

    if (name in totalCities) {
      totalCities[name].population += Number(population);
      totalCities[name].gold += Number(gold);
    } else {
      totalCities[name] = {population: Number(population), gold: Number(gold)};
    }

    curRow = arr.shift();
  }

  let curLine = arr.shift();

  while (curLine !== 'End') {
    const tokens = curLine.split('=>');

    const event = tokens.shift();

    const town = tokens.shift();

    if (event === 'Plunder') {
      const people = Number(tokens.shift());
      const gold = Number(tokens.shift());

      console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

      totalCities[town].population -= people;
      totalCities[town].gold -= gold;

      if (totalCities[town].population === 0 || totalCities[town].gold === 0) {
        console.log(`${town} has been wiped off the map!`);

        delete totalCities[town];
      }
    } else if (event === 'Prosper') {
      const gold = Number(tokens.shift());

      if (gold >= 0) {
        const curGold = totalCities[town].gold += gold;

        console.log(`${gold} gold added to the city treasury. ${town} now has ${curGold} gold.`);
      } else {
        console.log('Gold added cannot be a negative number!');
      }
    }

    curLine = arr.shift();
  }

  const citiesCount = Object.keys(totalCities).length;

  if (citiesCount > 0) {
    console.log(`Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`);

    for (const town in totalCities) {
      const people = totalCities[town].population;
      const gold = totalCities[town].gold;

      console.log(`${town} -> Population: ${people} citizens, Gold: ${gold} kg`);
    }
  } else {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
  }
}

solveCurTask(["Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End"]);