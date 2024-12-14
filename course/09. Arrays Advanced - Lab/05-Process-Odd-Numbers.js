function solveCurTask(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];

    if (i % 2 !== 0) {
      curNum *= 2;

      newArr.unshift(curNum);
    }
  }

  console.log(newArr.join(' '));
}

solveCurTask([3, 0, 10, 4, 7, 3]);