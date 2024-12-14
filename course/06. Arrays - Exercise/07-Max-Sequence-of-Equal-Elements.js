function solveCurTask(arr) {
  let curArr = [arr[0]];
  let longestArr = [];

  for (let i = 1; i < arr.length; i++) {
    const curValue = arr[i];

    if (curValue === curArr[0]) {
      curArr.push(curValue);

      if (curArr.length > longestArr.length) {
        longestArr = curArr;
      }
    } else {
      curArr = [curValue];
    }
  }

  console.log(longestArr.join(' '));
}

solveCurTask([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);