function solveCurTask(num, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let value = num.toFixed(precision);
  let parsedValue = parseFloat(value);

  console.log(parsedValue);
}

solveCurTask(10.5, 3);