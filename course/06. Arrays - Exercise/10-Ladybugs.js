function solveCurTask(arr) {
  const fieldSize = arr[0];
  const bugsIndexes = arr[1].split(' ').map(Number);

  const field = [];

  for (let i = 0; i < fieldSize; i++) {
    if (bugsIndexes.includes(i)) {
      field[i] = 1;
    } else {
      field[i] = 0;
    }
  }

  for (let j = 2; j < arr.length; j++) {
    const curCommand = arr[j];
    const commandElems = curCommand.split(' ');

    const bugIndex = Number(commandElems[0]);
    const direction = commandElems[1];
    const distance = Number(commandElems[2]);

    if (field[bugIndex] !== 1) {
      continue;
    }

    field[bugIndex] = 0;

    if (direction === 'left') {
      let newIndex = bugIndex - distance;

      if (newIndex >= 0) {
        while (field[newIndex] === 1) {
          newIndex -= distance;
        }

        if (newIndex >= 0) {
          field[newIndex] = 1;
        }
      }
    } else {
      let newIndex = bugIndex + distance;

      if (newIndex < field.length) {
        while (field[newIndex] === 1) {
          newIndex += distance;
        }

        if (newIndex < field.length) {
          field[newIndex] = 1;
        }
      }
    }
  }

  console.log(field.join(' '));
}

solveCurTask([3, '0 1', '0 right 1', '2 right 1']);