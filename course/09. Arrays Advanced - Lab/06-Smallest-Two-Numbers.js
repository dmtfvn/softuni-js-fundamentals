function solveCurTask(arr) {
  const newArr = arr.sort((a, b) => a - b);

  const smallestTwoNums = newArr.slice(0, 2);

  console.log(smallestTwoNums.join(' '));
}

solveCurTask([30, 15, 50, 5]);