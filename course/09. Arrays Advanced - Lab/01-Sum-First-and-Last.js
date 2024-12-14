function solveCurTask(arr) {
  const firstNum = Number(arr.shift());
  const lastNum = Number(arr.pop());

  const sum = firstNum + lastNum;

  console.log(sum);
}

solveCurTask(['20', '30', '40']);