function solveCurTask(arr) {
  let group = Number(arr[0]);
  let liftCurState = arr[1].split(' ').map(Number);

  for (let i = 0; i < liftCurState.length; i++) {
    if (liftCurState[i] === 4) {
      continue;
    }

    while (liftCurState[i] < 4) {
      if (group === 0) {
        break;
      }

      group--;
      liftCurState[i]++;
    }
  }

  let isLiftFull = true;

  for (let i = 0; i < liftCurState.length; i++) {
    const wagonFinalState = liftCurState[i];

    if (wagonFinalState < 4) {
      isLiftFull = false;
    }
  }

  if (isLiftFull && group === 0) {
    console.log(liftCurState.join(' '));
    return;
  }

  if (isLiftFull || group === 0) {
    if (group === 0 && !isLiftFull) {
      console.log('The lift has empty spots!');
    } else if (group > 0 && isLiftFull) {
      console.log(`There isn't enough space! ${group} people in a queue!`);
    }
  }

  console.log(liftCurState.join(' '));
}

solveCurTask(['15', '0 0 0 0']);