function solveCurTask(n1, n2, n3) {
  function sum(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  const sumNums = sum(n1, n2);
  const result = subtract(sumNums, n3);

  console.log(result);
}

solveCurTask(23, 6, 10);