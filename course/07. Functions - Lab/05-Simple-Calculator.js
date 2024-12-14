function solveCurTask(num1, num2, operator) {
  const multiply = (n1, n2) => n1 * n2;
  const divide = (n1, n2) => n1 / n2;
  const add = (n1, n2) => n1 + n2;
  const subtract = (n1, n2) => n1 - n2;

  const result = {
    'multiply': multiply(num1, num2),
    'divide': divide(num1, num2),
    'add': add(num1, num2),
    'subtract': subtract(num1, num2)
  };

  console.log(result[operator]);
}

solveCurTask(23, 7, 'add');