function solveCurTask(arr) {
  const regEx = /(%)(?<customer>[A-Z][a-z]+)\1[^|$%.]*<(?<product>\w+)>[^|$%.]*(\|)(?<count>\d+)\4[^\d|$%.]*(?<price>\d+\.?\d+)\$/;

  let income = 0;

  let command = arr.shift();

  while (command !== 'end of shift') {
    const tokens = command.match(regEx);

    if (tokens) {
      const customerName = tokens.groups.customer;
      const product = tokens.groups.product;

      const count = Number(tokens.groups.count);
      const price = Number(tokens.groups.price);

      const totalPrice = count * price;
      
      console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`)

      income += totalPrice;
    }

    command = arr.shift();
  }

  console.log(`Total income: ${income.toFixed(2)}`);
}

solveCurTask(['%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>1.3$',
  '%Maria%<Cola>|1|2.4',
  '%Valid%<Valid>valid|10|valid20$',
  'end of shift']);