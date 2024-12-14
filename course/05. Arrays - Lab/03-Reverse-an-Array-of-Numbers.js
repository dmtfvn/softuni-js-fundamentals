function solveCurTask(num, arr) {
  const newArr = [];

  for (let i = 0; i < num; i++) {
    newArr[i] = arr[i];
  }

  const reverseArr = [];

  for (let i = newArr.length - 1; i >= 0; i--) {
    reverseArr[reverseArr.length] = newArr[i];
  }

  const result = reverseArr.join(' ');

  console.log(result);
}

solveCurTask(3, [10, 20, 30, 40, 50]);