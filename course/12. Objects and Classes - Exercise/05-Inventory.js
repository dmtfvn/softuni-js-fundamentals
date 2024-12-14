function solveCurTask(arr) {
  const heroes = [];

  class Inventory {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  for (const heroData of arr) {
    const [name, level, items] = heroData.split(' / ');

    const instance = new Inventory(name, level, items);

    heroes.push(instance);
  }

  heroes.sort((a, b) => a.level - b.level);

  for (const result of heroes) {
    console.log(`Hero: ${result.name}`);
    console.log(`level => ${result.level}`);
    console.log(`items => ${result.items}`);
  }
}

solveCurTask([
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara'
  ]);