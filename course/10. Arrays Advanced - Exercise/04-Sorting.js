function solveCurTask(arr) {
  const newArr = [];

  const sortedArr = arr.sort((a, b) => b - a);

  while (sortedArr.length > 0) {
    const firstElem = sortedArr.shift();
    newArr.push(firstElem);

    if (sortedArr.length > 0) {
      const lastElem = sortedArr.pop();
      newArr.push(lastElem);
    }
  }

  console.log(newArr.join(' '));
}

solveCurTask([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);