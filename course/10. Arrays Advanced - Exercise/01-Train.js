function solveCurTask(arr) {
  let train = arr.shift().split(' ').map(Number);
  const wagonMaxCapacity = Number(arr.shift());

  for (const command of arr) {
    if (command.includes('Add')) {
      const values = command.split(' ');

      const passengers = Number(values[1]);
      train.push(passengers);
    } else {
      const newPassengers = Number(command);

      for (let i = 0; i < train.length; i++) {
        if (train[i] + newPassengers <= wagonMaxCapacity) {
          train[i] += newPassengers;
          break;
        }
      }
    }
  }

  console.log(train.join(' '));
}

solveCurTask(['32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75']);