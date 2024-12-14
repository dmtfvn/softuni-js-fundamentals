function solveCurTask(num) {
  let sum = 0;
  let result = '';

  for (let i = 1; i <= num; i++) {
    const value = String(i);

    for (let j = 0; j < value.length; j++) {
      sum += Number(value[j]);
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      result = `${value} -> True`;
    } else {
      result = `${value} -> False`;
    }

    console.log(result);

    sum = 0;
  }
}

solveCurTask(15);