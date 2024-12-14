function solveCurTask(arr) {
  let numSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const curNum = Number(arr[i]);

    if (curNum % 2 === 0) {
      numSum += curNum;
    }
  }

  console.log(numSum);
}

solveCurTask(['1', '2', '3', '4', '5', '6']);