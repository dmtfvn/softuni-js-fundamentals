function solveCurTask(arr) {
  const journal = arr.shift().split(', ');

  let i = 0;
  let command = arr[i];

  while (command !== 'Craft!') {
    const newArr = command.split(' - ');

    const [curCmd, current] = newArr;

    if (curCmd === 'Collect') {
      if (!journal.includes(current)) {
        journal.push(current);
      }
    } else if (curCmd === 'Drop') {
      if (journal.includes(current)) {
        const itemIdx = journal.indexOf(current);

        journal.splice(itemIdx, 1);
      }
    } else if (curCmd === 'Combine Items') {
      const items = current.split(':');
      
      const oldItem = items[0];
      const newItem = items[1];

      if (journal.includes(oldItem)) {
        const oldItemIdx = journal.indexOf(oldItem);

        journal.splice(oldItemIdx + 1, 0, newItem);
      }
    } else if (curCmd === 'Renew') {
      if (journal.includes(current)) {
        const itemIdx = journal.indexOf(current);

        journal.splice(itemIdx, 1);
        journal.push(current);
      }
    }

    i++;
    command = arr[i];
  }

  console.log(journal.join(', '));
}

solveCurTask([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
]);