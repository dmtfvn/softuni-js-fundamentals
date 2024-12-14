function solveCurTask(arr) {
  const plantsCollection = {};

  const plantsCount = Number(arr.shift());

  for (let i = 0; i < plantsCount; i++) {
    const curPlant = arr.shift().split('<->');

    const [name, rarity] = curPlant;

    if (name in plantsCollection) {
      plantsCollection[name] = rarity;
    } else {
      plantsCollection[name] = {rarity: rarity, rating: []};
    }
  }

  let curCommand = arr.shift();

  while (curCommand !== 'Exhibition') {
    const tokens = curCommand.split(': ');

    const command = tokens.shift();

    const plantPair = tokens[0].split(' - ');

    const name = plantPair.shift();

    if (name in plantsCollection) {
      if (command === 'Rate') {
        const rating = Number(plantPair.shift());
  
        plantsCollection[name].rating.push(rating);
      } else if (command === 'Update') {
        const newRarity = plantPair.shift();
  
        plantsCollection[name].rarity = newRarity;
      } else if (command === 'Reset') {
        plantsCollection[name].rating.splice(0);
      }
    } else {
      console.log('error');
    }

    curCommand = arr.shift();
  }

  console.log('Plants for the exhibition:');

  for (const plant in plantsCollection) {
    const plantRarity = plantsCollection[plant].rarity;
    const plantRatings = plantsCollection[plant].rating;

    let avgRating = 0;

    if (plantRatings.length > 0) {
      const ratingSum = plantRatings.reduce((acc, value) => acc + value);

      avgRating = ratingSum / plantRatings.length;
    }

    console.log(`- ${plant}; Rarity: ${plantRarity}; Rating: ${avgRating.toFixed(2)}`);
  }
}

solveCurTask(["3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition"]);