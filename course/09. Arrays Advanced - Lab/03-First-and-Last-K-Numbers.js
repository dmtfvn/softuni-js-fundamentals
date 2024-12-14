function solveCurTask(arr) {
  const k = arr.shift();

  const firstK = arr.slice(0, k);
  const lastK = arr.slice(-k);

  console.log(firstK.join(' '));
  console.log(lastK.join(' '));
}

solveCurTask([3,
  6, 7, 8, 9]);