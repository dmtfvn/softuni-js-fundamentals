function solveCurTask(arr) {
  const midIndex = Math.floor(arr.length / 2);

  for (let i = 0; i < midIndex; i++) {
    const j = arr.length - 1 - i;

    const temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
  }

  console.log(arr.join(' '));
}

solveCurTask(['a', 'b', 'c', 'd', 'e']);