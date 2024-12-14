function solveCurTask(arr) {
  let sequence = arr.shift().split(' ').map(Number);

  let i = 0;
  let command = arr[i];

  while (command !== 'End') {
    let arrWithElems = command.split(' ');
    const curCommand = arrWithElems.shift();

    arrWithElems = arrWithElems.map(Number);

    const [index, value] = arrWithElems;

    if (curCommand === 'Shoot') {
      if (index >= 0 && index < sequence.length) {
        sequence[index] -= value;

        if (sequence[index] <= 0) {
          sequence.splice(index, 1);
        }
      }
    } else if (curCommand === 'Add') {
      if (index >= 0 && index < sequence.length) {
        sequence.splice(index, 0, value);
      } else {
        console.log('Invalid placement!');
      }
    } else if (curCommand === 'Strike') {
      if (index >= 0 && index < sequence.length) {
        if (index - value < 0 || index + value === undefined) {
          console.log('Strike missed!');
        } else {
          const rmTargetsCount = 1 + value * 2;
          const start = index - value;

          sequence.splice(start, rmTargetsCount);
        }
      }
    }

    i++;
    command = arr[i];
  }

  console.log(sequence.join('|'));
}

solveCurTask(["52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End"]);