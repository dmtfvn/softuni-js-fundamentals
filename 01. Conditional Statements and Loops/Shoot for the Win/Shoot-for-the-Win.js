function solveCurTask(arr) {
  const sequence = arr.shift().split(' ').map(Number);

  let shotCount = 0;

  let i = 0;
  let curElem = arr[i];

  while (curElem !== 'End') {
    const curIndex = Number(curElem);

    if (curIndex < 0 || curIndex > sequence.length - 1) {
      i++;
      curElem = arr[i];
      continue;
    }

    const targetValue = sequence[curIndex];

    sequence[curIndex] = -1;

    shotCount++;

    for (let j = 0; j < sequence.length; j++) {
      const curTarget = sequence[j];

      if (curTarget === -1) {
        continue;
      }

      if (curTarget <= targetValue) {
        sequence[j] = curTarget + targetValue;
      } else {
        sequence[j] = curTarget - targetValue;
      }
    }

    i++;
    curElem = arr[i];
  }

  console.log(`Shot targets: ${shotCount} -> ${sequence.join(' ')}`);
}

solveCurTask(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);