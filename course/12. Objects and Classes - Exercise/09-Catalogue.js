function solveCurTask(arr) {
  const products = [];
  let letter = '';

  class Catalogue {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }

    groupByFirstLetter() {
      if (this.name[0] === letter) {
        console.log(`  ${this.name}: ${this.price}`);
      } else {
        letter = this.name[0].toUpperCase();

        console.log(letter);
        console.log(`  ${this.name}: ${this.price}`);
      }
    }
  }

  for (const curElem of arr) {
    const [name, price] = curElem.split(' : ');

    const instance = new Catalogue(name, price);

    products.push(instance);
  }

  products.sort((a, b) => a.name.localeCompare(b.name));
  products.forEach(obj => obj.groupByFirstLetter());
}

solveCurTask([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
  ]);