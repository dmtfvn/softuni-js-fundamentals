function solveCurTask(curStock, orderedStock) {
  const store = new Map();

  for (let i = 0; i < curStock.length; i += 2) {
    const product = curStock[i];
    const quantity = Number(curStock[i + 1]);

    store.set(product, quantity);
  }

  for (let j = 0; j < orderedStock.length; j += 2) {
    const product = orderedStock[j];
    const quantity = Number(orderedStock[j + 1]);

    if (!store.has(product)) {
      store.set(product, quantity);
    } else {
      const curQuantity = store.get(product);
      const newQuantity = curQuantity + quantity;

      store.set(product, newQuantity);
    }
  }

  const finalStore = [...store];

  for (const [product, quantity] of finalStore) {
    console.log(`${product} -> ${quantity}`);
  }
}

solveCurTask([
  'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
  ],
  [
  'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
  ]);