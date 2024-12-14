function solveCurTask(arr) {
  let newArr = arr.shift().split(' ').map(Number);

  for (let i = 0; i < arr.length; i++) {
    const command = arr[i].split(' ');

    const curCmd = command[0];
    const curValue = Number(command[1]);

    switch (curCmd) {
      case 'Add':
        newArr.push(curValue);
        break;
      case 'Remove':
        const occurredNums = newArr.filter(e => e !== curValue);

        newArr = occurredNums;
        break;
      case 'RemoveAt':
        newArr.splice(curValue, 1);
        break;
      case 'Insert':
        const index = Number(command[2]);

        newArr.splice(index, 0, curValue);
        break;
    }
  }

  console.log(newArr.join(' '));
}

solveCurTask(['6 12 2 65 6 42',
  'Add 8',
  'Remove 12',
  'RemoveAt 3',
  'Insert 6 2']);