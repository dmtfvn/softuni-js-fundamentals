function solveCurTask(arr) {
  const distributors = {};

  const clients = {};
  let allClientsMoneySpent = 0;

  let curCommand = arr.shift();

  while (curCommand !== 'End') {
    const tokens = curCommand.split(' ');

    const action = tokens.shift();

    if (action === 'Deliver') {
      const dName = tokens.shift();
      const moneySpent = Number(tokens.shift());

      if (dName in distributors) {
        distributors[dName].money += moneySpent;
      } else {
        distributors[dName] = {money: moneySpent};
      }
    } else if (action === 'Return') {
      const dName = tokens.shift();
      const moneyReturned = Number(tokens.shift());

      if (dName in distributors) {
        if (distributors[dName].money < moneyReturned) {
          curCommand = arr.shift();
          continue;
        } else {
          distributors[dName].money -= moneyReturned;
  
          if (distributors[dName].money === 0) {
            delete distributors[dName];
          }
        }
      }
    } else if (action === 'Sell') {
      const cName = tokens.shift();
      const moneyEarned = Number(tokens.shift());

      if (cName in clients) {
        clients[cName].money += moneyEarned;
      } else {
        clients[cName] = {money: moneyEarned};
      }

      allClientsMoneySpent += moneyEarned;
    }

    curCommand = arr.shift();
  }

  for (const curClient in clients) {
    const moneyEarned = clients[curClient].money;

    console.log(`${curClient}: ${moneyEarned.toFixed(2)}`);
  }

  console.log('-----------');

  for (const curDistributor in distributors) {
    const moneySpent = distributors[curDistributor].money;

    console.log(`${curDistributor}: ${moneySpent.toFixed(2)}`);
  }

  console.log('-----------');
  console.log(`Total Income: ${allClientsMoneySpent.toFixed(2)}`);
}

solveCurTask(["Deliver North 200.30",
  "Sell Peter 30.20",
  "Return Macro 5000.00",
  "Return North 100.30",
  "Sell Peter 50.50",
  "End"]);