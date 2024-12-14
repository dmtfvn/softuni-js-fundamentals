function solveCurTask(arr) {
  const storage = new Map();

  for (const data of arr) {
    const tokens = data.split(' ');

    const product = tokens[0];
    const quantity = Number(tokens[1]);

    if (!storage.has(product)) {
      storage.set(product, quantity);
    } else {
      const curQuantity = storage.get(product);
      const newQuantity = curQuantity + quantity;

      storage.set(product, newQuantity);
    }
  }

  for (const item of storage) {
    console.log(`${item[0]} -> ${item[1]}`);
  }
}

solveCurTask(['tomatoes 10',
  'coffee 5',
  'olives 100',
  'coffee 40']);