function solveCurTask(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const curValue = arr1[i];

    if (arr2.includes(curValue)) {
      console.log(curValue);
    }
  }
}

solveCurTask(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
);