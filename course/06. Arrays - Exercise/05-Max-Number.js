function solveCurTask(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const iCurValue = arr[i];
    let isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
      const jCurValue = arr[j];

      if (iCurValue <= jCurValue) {
        isTop = false;
        break;
      }
    }

    if (isTop) {
      newArr.push(iCurValue);
    }
  }

  console.log(newArr.join(' '));
}

solveCurTask([1, 4, 3, 2]);