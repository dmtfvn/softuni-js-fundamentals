function solveCurTask(arr) {
  let sequence = arr.shift().split(' ').map(Number);

  let i = 0;
  let command = arr[i];

  while (command !== 'Finish') {
    const curElems = command.split(' ');

    const curCmd = curElems.shift();
    const curValue = Number(curElems[0]);

    if (curCmd === 'Add') {
      sequence.push(curValue);
    } else if (curCmd === 'Remove') {
      if (sequence.includes(curValue)) {
        const idx = sequence.indexOf(curValue);

        sequence.splice(idx, 1);
      }
    } else if (curCmd === 'Replace') {
      if (sequence.includes(curValue)) {
        const replace = Number(curElems[1]);
        const idx = sequence.indexOf(curValue);

        sequence.splice(idx, 1, replace);
      }
    } else if (curCmd === 'Collapse') {
      const rmNums = sequence.filter(n => n >= curValue);

      sequence = rmNums;
    }

    i++;
    command = arr[i];
  }

  console.log(sequence.join(' '));
}

solveCurTask(["5 9 70 -56 9 9",
  "Replace 9 10",
  "Remove 9",
  "Finish"]);