function solveCurTask(arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    const curEl1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const curEl2 = arr[j];

      const pairSum = curEl1 + curEl2;

      if (pairSum === compare) {
        console.log(`${curEl1} ${curEl2}`);
      }
    }
  }
}

solveCurTask([14, 20, 60, 13, 7, 19, 8], 27);