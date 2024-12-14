function solveCurTask(arr) {
  const cities = Number(arr.shift());

  let cityCount = 1;

  let totalProfit = 0;

  for (let i = 0; i < cities * 3; i += 3) {
    const city = arr[i];

    let income = Number(arr[i + 1]);
    let expenses = Number(arr[i + 2]);

    let cityProfit = 0;

    if (cityCount % 5 === 0) {
      income *= 0.9;
    } else if (cityCount % 3 === 0) {
      expenses += expenses * 0.5;
    }

    cityProfit = income - expenses;

    console.log(`In ${city} Burger Bus earned ${cityProfit.toFixed(2)} leva.`);

    totalProfit += cityProfit;

    cityCount++;
  }

  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

solveCurTask([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20"
]);