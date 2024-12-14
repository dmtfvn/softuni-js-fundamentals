function solveCurTask(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = Number(arr2[i]);
  }

  let sumEqualNums = 0;

  for (let i = 0; i < arr1.length; i++) {
    const firstArrCurNum = arr1[i];
    const secondArrCurNum = arr2[i];
  
    if (firstArrCurNum !== secondArrCurNum) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    } else {
      sumEqualNums += firstArrCurNum;
    }
  }

  console.log(`Arrays are identical. Sum: ${sumEqualNums}`);
}

solveCurTask(['10','20','30'], ['10','20','30']);