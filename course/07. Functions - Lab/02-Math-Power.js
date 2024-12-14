function solveCurTask(num, power) {
  let numToPow = 1;

  for (let i = 0; i < power; i++) {
    numToPow *= num;
  }

  console.log(numToPow);
}

solveCurTask(2, 8);