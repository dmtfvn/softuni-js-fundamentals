function solveCurTask(num1, num2) {
  function calcFactorial(num) {
    let factorial = 1;

    for (let factor = 2; factor <= num; factor++) {
      factorial *= factor;
    }

    return factorial;
  }

  const factorial1 = calcFactorial(num1);
  const factorial2 = calcFactorial(num2);

  const result = factorial1 / factorial2;

  console.log(result.toFixed(2));
}

solveCurTask(5, 2);