function solveCurTask(num1, num2, num3) {
  const numArr = [num1, num2, num3];

  let negative = 0;
  let positive = 0;

  for (let i = 0; i < numArr.length; i++) {
    const curNum = numArr[i];

    if (curNum < 0) {
      negative++;
    }

    if (curNum > 0) {
      positive++;
    }
  }

  if (negative > positive && positive === 0) {
    console.log('Negative');
  } else if (negative > positive && positive === 1) {
    console.log('Positive');
  } else if (positive > negative && negative === 1) {
    console.log('Negative');
  } else if (positive > negative && negative=== 0) {
    console.log('Positive');
  }
}

solveCurTask(-1, -2, -3);