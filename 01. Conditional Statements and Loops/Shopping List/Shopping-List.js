function solveCurTask(arr) {
  let list = arr.shift().split('!');

  let i = 0;
  let command = arr[i];

  while (command !== 'Go Shopping!') {
    const arrWithItems = command.split(' ');

    const curCmd = arrWithItems.shift();

    const curElem = arrWithItems[0];

    if (curCmd === 'Urgent') {
      if (!list.includes(curElem)) {
        list.unshift(curElem);
      }
    } else if (curCmd === 'Unnecessary') {
      if (list.includes(curElem)) {
        const elemIdx = list.indexOf(curElem);

        list.splice(elemIdx, 1);
      }
    } else if (curCmd === 'Correct') {
      if (list.includes(curElem)) {
        const newElem = arrWithItems[1];
        const oldElemIdx = list.indexOf(curElem);

        list[oldElemIdx] = newElem;
      }
    } else if (curCmd === 'Rearrange') {
      if (list.includes(curElem)) {
        const itemIdx = list.indexOf(curElem);
        const temp = list[itemIdx];

        list.splice(itemIdx, 1);
        list.push(temp);
      }
    }

    i++;
    command = arr[i];
  }

  console.log(list.join(', '));
}

solveCurTask(["Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!"]);