function solveCurTask(arr1, arr2) {
  const numsToTake = arr2[0];
  const numsToDelete = arr2[1];
  const numToSearch = arr2[2];

  const takenNums = arr1.slice(0, numsToTake);
  takenNums.splice(0, numsToDelete);

  const numCount = takenNums.filter(num => num === numToSearch);

  console.log(`Number ${numToSearch} occurs ${numCount.length} times.`);
}

solveCurTask([7, 1, 5, 8, 2, 7],
  [3, 1, 5]);