function solveCurTask(arr) {
  const regEx = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;

  const items = [];

  let totalPrice = 0;

  let command = arr.shift();

  while (command !== 'Purchase') {
    const tokens = command.match(regEx);

    if (tokens) {
      const {name, price, quantity} = tokens.groups;

      items.push(name);

      const furniturePrice = Number(price) * Number(quantity);
  
      totalPrice += furniturePrice;
    }

    command = arr.shift();
  }

  console.log('Bought furniture:');

  items.forEach(el => console.log(el));

  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solveCurTask([
  '>>Sofa<<312.23!3',
  '>>TV<<300!5',
  '>Invalid<<!5',
  'Purchase'
]);