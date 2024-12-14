function solveCurTask(arr) {
  let isFound = false;

  for (let i = 0; i < arr.length; i++) {
    let sumLeftNums = 0;
    let sumRightNums = 0;

    for (let j = 0; j < i; j++) {
      const curNumLeft = arr[j];

      sumLeftNums += curNumLeft;
    }

    for (let k = i + 1; k < arr.length; k++) {
      const curNumRight = arr[k];

      sumRightNums += curNumRight;
    }

    if (sumLeftNums === sumRightNums) {
      console.log(i);
      isFound = true;
      break;
    }
  }

  if (!isFound) {
    console.log('no');
  }
}

solveCurTask([1, 2, 3, 3]);