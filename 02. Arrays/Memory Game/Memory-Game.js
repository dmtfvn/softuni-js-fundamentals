function solveCurTask(arr) {
  const sequence = arr.shift().split(' ');

  let turnCount = 1;

  let i = 0;
  let compare = arr[i];

  while (compare !== 'end') {
    const curIndexes = compare.split(' ').map(Number);

    const index1 = Math.min(curIndexes[0], curIndexes[1]);
    const index2 = Math.max(curIndexes[0], curIndexes[1]);

    if (index1 === index2 || index1 < 0 || index2 < 0 || index1 >= sequence.length || index2 >= sequence.length) {
      const addedElems = `-${turnCount}a`;

      sequence.splice(sequence.length / 2, 0, addedElems, addedElems);

      console.log('Invalid input! Adding additional elements to the board');
    } else {
      if (sequence[index1] === sequence[index2]) {
        const element = sequence.splice(index1, 1);
        sequence.splice(index2 - 1, 1);

        console.log(`Congrats! You have found matching elements - ${element}!`);
      } else {
        console.log('Try again!');
      }
    }

    if (sequence.length === 0) {
      console.log(`You have won in ${turnCount} turns!`);
      return;
    }

    turnCount++;

    i++;
    compare = arr[i];
  }

  if (sequence.length > 0) {
    console.log('Sorry you lose :(');
    console.log(sequence.join(' '));
  }
}

solveCurTask([
  "1 1 2 2 3 3 4 4 5 5", 
  "1 0",
  "-1 0",
  "1 0", 
  "1 0", 
  "1 0", 
  "end"
  ]);