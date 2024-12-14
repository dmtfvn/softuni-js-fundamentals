function solveCurTask(arr) {
  let bitcoinCount = 0;
  let firstPurchase = 0;
  let totalMoney = 0;
  let dayCount = 1;

  let gramOfGold = 67.51;
  let oneBitcoin = 11949.16;

  for (let i = 0; i < arr.length; i++) {
    let minedGold = arr[i];

    if (dayCount % 3 === 0) {
      minedGold *= 0.7;
    }

    let moneyFromGold = minedGold * gramOfGold;

    totalMoney += moneyFromGold;

    while (totalMoney >= oneBitcoin) {
      bitcoinCount++;

      if (bitcoinCount === 1) {
        firstPurchase = dayCount;
      }

      totalMoney -= oneBitcoin;
    }

    dayCount++;
  }

  console.log(`Bought bitcoins: ${bitcoinCount}`);

  if (bitcoinCount > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
  }

  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

solveCurTask([50, 100]);