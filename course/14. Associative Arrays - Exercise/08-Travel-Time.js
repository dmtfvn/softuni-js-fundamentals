function solveCurTask(arr) {
  const destinations = {};

  for (const tokens of arr) {
    const travelData = tokens.split(' > ');

    const country = travelData.shift();
    const town = travelData.shift();
    const cost = Number(travelData.shift());

    if (country in destinations) {
      if (!destinations[country].includes(town)) {
        destinations[country].push(town, cost);
      } else {        
        const price = destinations[country].indexOf(town) + 1;

        if (destinations[country][price] > cost) {
          destinations[country][price] = cost;
        }
      }
    } else {
      destinations[country] = [town, cost];
    }
  }

  const newArr = Object.entries(destinations);
  newArr.sort((a, b) => a[0].localeCompare(b[0]));

  for (const curData of newArr) {
    const curCountry = curData[0];
    const curTownPrice = curData[1];

    const tempArr = [];

    for (let i = 0; i < curTownPrice.length; i += 2) {
      const city = curTownPrice[i];
      const price = curTownPrice[i + 1];

      const pair = [city, price];

      tempArr.push(pair);

      tempArr.sort((a, b) => a[1] - b[1]);
    }

    const pairsArr = [];

    for (const curArr of tempArr) {
      const curPair = curArr.join(' -> ');

      pairsArr.push(curPair);
    }

    console.log(`${curCountry} -> ${pairsArr.join(' ')}`);
  }
}

solveCurTask([
  'Bulgaria > Sofia > 25000',
  'Bulgaria > Sofia > 25000',
  'Kalimdor > Orgrimar > 25000',
  'Albania > Tirana > 25000',
  'Bulgaria > Varna > 25010',
  'Bulgaria > Lukovit > 10'
  ]);