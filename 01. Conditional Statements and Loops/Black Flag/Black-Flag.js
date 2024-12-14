function solveCurTask(arr) {
  const daysCount = Number(arr[0]);
  let dailyPlunder = Number(arr[1]);
  const expectedPlunder = Number(arr[2]);

  let total = 0;

  for (let day = 1; day <= daysCount; day++) {
    total += dailyPlunder;

    if (day % 3 === 0) {
      total += dailyPlunder * 0.5;
    }

    if (day % 5 === 0) {
      total -= total * 0.3;
    }
  }

  if (total >= expectedPlunder) {
    console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
  } else {
    const deficit = expectedPlunder - total;
    const percent = 100 - (deficit / expectedPlunder * 100);

    console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
  }
}

solveCurTask(["10", "20", "380"]);