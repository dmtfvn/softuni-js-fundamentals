function solveCurTask(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const curNum = arr[i];

    if (curNum < 0) {
      newArr.unshift(curNum);
    } else {
      newArr.push(curNum);
    }
  }

  console.log(newArr.join('\n'));
}

solveCurTask(['7', '-2', '8', '9']);