function solveCurTask(arr) {
  let sumEvenNum = 0;
  let sumOddNum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);

    if (num % 2 === 0) {
      sumEvenNum += num;
    } else {
      sumOddNum += num;
    }
  }

  const result = sumEvenNum - sumOddNum;

  console.log(result);
}

solveCurTask(['1', '2', '3', '4', '5', '6']);