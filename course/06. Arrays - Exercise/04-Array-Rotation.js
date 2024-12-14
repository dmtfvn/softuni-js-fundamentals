function solveCurTask(arr, rotation) {
  for (let i = 0; i < rotation; i++) {
    const movedValue = arr.shift();

    arr.push(movedValue);
  }

  console.log(arr.join(' '));
}

solveCurTask([51, 47, 32, 61, 21], 2);