function solveCurTask(arr) {
  const resourceQiantity = {};

  for (let i = 0; i < arr.length; i += 2) {
    const resource = arr[i];
    const quantity = Number(arr[i + 1]);

    if (resource in resourceQiantity) {
      resourceQiantity[resource] += quantity;
    } else {
      resourceQiantity[resource] = quantity;
    }
  }

  const arrOfTuples = Object.entries(resourceQiantity);

  for (const [resource, quantity] of arrOfTuples) {
    console.log(`${resource} -> ${quantity}`);
  }
}

solveCurTask([
  'gold',
  '155',
  'silver',
  '10',
  'copper',
  '17',
  'gold',
  '15'
  ]);