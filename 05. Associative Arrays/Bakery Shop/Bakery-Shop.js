function solveCurTask(arr) {
  const bakeryShop = {};

  let curCommand = arr.shift();

  let totalSoldFoodQuantity = 0;

  while (curCommand !== 'Complete') {
    const tokens = curCommand.split(' ');

    const command = tokens.shift();
    const quantity = Number(tokens.shift());
    const foodType = tokens.shift();

    if (command === 'Receive') {
      if (foodType in bakeryShop) {
        if (quantity <= 0) {
          curCommand = arr.shift();
  
          continue;
        } else {
          bakeryShop[foodType] += quantity;
        }
      } else {
        if (quantity <= 0) {
          curCommand = arr.shift();
  
          continue;
        } else {
          bakeryShop[foodType] = quantity;
        }
      }
    } else if (command === 'Sell') {
      if (foodType in bakeryShop) {
        if (quantity > bakeryShop[foodType]) {
          const curFoodStock = bakeryShop[foodType];

          console.log(`There aren't enough ${foodType}. You sold the last ${curFoodStock} of them.`);

          totalSoldFoodQuantity += curFoodStock;

          delete bakeryShop[foodType];
        } else {
          console.log(`You sold ${quantity} ${foodType}.`);

          totalSoldFoodQuantity += quantity;

          bakeryShop[foodType] -= quantity;
        }

        if (bakeryShop[foodType] === 0) {
          delete bakeryShop[foodType];
        }
      } else {
        console.log(`You do not have any ${foodType}.`);
      }
    }

    curCommand = arr.shift();
  }

  for (const curStock in bakeryShop) {
    console.log(`${curStock}: ${bakeryShop[curStock]}`);
  }

  console.log(`All sold: ${totalSoldFoodQuantity} goods`);
}

solveCurTask([
  'Receive 10 muffins',
  'Receive 23 bagels',
  'Sell 5 muffins',
  'Sell 10 bagels',
  'Complete'
]);