function solveCurTask(arr) {
  let i = 0;
  let newArr = [];

  while (arr.length > 1) {
    if (i === arr.length - 1) {
      arr = newArr;
      newArr = [];
      i = 0;
      continue;
    }

    newArr[i] = arr[i] + arr[i + 1];

    i++;
  }

  const condensedNum = arr[0];

  console.log(condensedNum);
}

solveCurTask([2, 10, 3]);