function solveCurTask(arr) {
  const animals = {};

  let curCommand = arr.shift();

  while (curCommand !== 'EndDay') {
    const curLine = curCommand.split(': ');

    const action = curLine.shift();

    if (action === 'Add') {
      const tokens = curLine.shift().split('-');

      const [name, reqFood, area] = tokens;

      if (name in animals) {
        animals[name].food += Number(reqFood);
      } else {
        animals[name] = {food: Number(reqFood), area};
      }
    } else if (action === 'Feed') {
      const tokens = curLine.shift().split('-');

      const [name, feed] = tokens;

      if (name in animals) {
        animals[name].food -= Number(feed);

        if (animals[name].food <= 0) {
          console.log(`${name} was successfully fed`);

          delete animals[name];
        }
      }
    }

    curCommand = arr.shift();
  }

  const hungryAnimals = {};

  console.log('Animals:');

  for (const curName in animals) {
    const curArea = animals[curName].area;
    const curFood = animals[curName].food;

    console.log(` ${curName} -> ${curFood}g`);

    if (curFood > 0) {
      if (curArea in hungryAnimals) { 
        hungryAnimals[curArea]++;
      } else {
        hungryAnimals[curArea] = 1;
      }
    }
  }

  console.log('Areas with hungry animals:');

  for (const curPlace in hungryAnimals) {
    const count = hungryAnimals[curPlace];

    console.log(` ${curPlace}: ${count}`);
  }
}

solveCurTask(["Add: Adam-4500-ByTheCreek",
  "Add: Maya-7600-WaterfallArea",
  "Add: Maya-1230-WaterfallArea",
  "Add: Sam-10-WaterfallArea",
  "Add: Roy-0-RiverArea",
  "Feed: Jamie-2000",
  "EndDay"]);