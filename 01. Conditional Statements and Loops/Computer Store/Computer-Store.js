function solveCurTask(input) {
  let noTaxPrice = 0;
  let taxPrice = 0;
  let totalPrice = 0;

  for (let i = 0; i < input.length; i++) {
    let value = input[i];
  
    if (value === 'special') {
      totalPrice *= 0.90;
      break;
    } else if (value === 'regular') {
      break;
    }

    let price = Number(value);

    if (price < 0) {
      console.log('Invalid price!');
    } else {
      noTaxPrice += price;
      taxPrice += (price * 1.20) - price;
    }

    totalPrice = noTaxPrice + taxPrice;
  }

  if (totalPrice === 0) {
    console.log('Invalid order!');
    return;
  }

  console.log(`Congratulations you've just bought a new computer!`);
  console.log(`Price without taxes: ${noTaxPrice.toFixed(2)}$`);
  console.log(`Taxes: ${taxPrice.toFixed(2)}$`);
  console.log(`-----------`);
  console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}

solveCurTask(['1050', '200', '450', '2', '18.50', '16.86', 'special']);