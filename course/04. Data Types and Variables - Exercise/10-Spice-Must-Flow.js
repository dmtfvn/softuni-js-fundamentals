function solveCurTask(yield) {
  const spiceForWorkers = 26;

  let totalSpice = 0;
  let dayCount = 0;

  while (yield >= 100) {
    const spiceExtract = yield;

    totalSpice += spiceExtract - spiceForWorkers;

    yield -= 10;

    dayCount++;
  }

  if (totalSpice >= spiceForWorkers) {
    totalSpice -= spiceForWorkers;
  }

  console.log(dayCount);
  console.log(totalSpice);
}

solveCurTask(450);