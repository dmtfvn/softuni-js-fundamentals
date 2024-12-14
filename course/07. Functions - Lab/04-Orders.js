function solveCurTask(product, quantity) {
  switch (product) {
    case 'coffee':
      price = 1.50;
      break;
    case 'water':
      price = 1.00;
      break;
    case 'coke':
      price = 1.40;
      break;
    case 'snacks':
      price = 2.00;
      break;
  }

  const order = price * quantity;

  console.log(order.toFixed(2));
}

solveCurTask("water", 5);