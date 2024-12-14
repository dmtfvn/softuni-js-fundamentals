function solveCurTask(input) {
  let arrNums = input.shift().split(' ').map(Number);

  let i = 0;
  let command = input[i];

  while (command !== 'end') {
    let curArrElems = command.split(' ');

    const curCmd = curArrElems.shift();

    if (curCmd === 'swap') {
      curArrElems = curArrElems.map(Number);
      const [cmd1, cmd2] = curArrElems;

      const temp = arrNums[cmd1];

      arrNums[cmd1] = arrNums[cmd2];
      arrNums[cmd2] = temp;
    } else if (curCmd === 'multiply') {
      curArrElems = curArrElems.map(Number);
      const [cmd1, cmd2] = curArrElems;

      arrNums[cmd1] *= arrNums[cmd2];
    } else if (curCmd === 'decrease') {
      for (let j = 0; j < arrNums.length; j++) {
        arrNums[j]--;
      }
    }

    i++;
    command = input[i];
  }

  console.log(arrNums.join(', '));
}

solveCurTask([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
]);