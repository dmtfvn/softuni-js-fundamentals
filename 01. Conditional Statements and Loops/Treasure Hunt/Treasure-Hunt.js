function solveCurTask(arr) {
  const curItemsInChest = arr.shift().split('|');

  let i = 0;
  let command = arr[i];

  while (command !== 'Yohoho!') {
    const itemsList = command.split(' ');
    const curCommand = itemsList.shift();

    for (const curElem of itemsList) {
      if (curCommand === 'Loot') {
        if (curItemsInChest.includes(curElem)) {
          continue;
        } else {
          curItemsInChest.unshift(curElem);
        }
      } else if (curCommand === 'Drop') {
        const index = Number(curElem);

        if (index >= 0 && index < curItemsInChest.length) {
          const removedItem = curItemsInChest[index];

          curItemsInChest.splice(index, 1);
          curItemsInChest.push(removedItem);
        } else {
          continue;
        }
      } else if (curCommand === 'Steal') {
        const itemsCount = Number(curElem);
        const stolenItems = curItemsInChest.splice(-itemsCount);

        console.log(stolenItems.join(', '));
      }
    }

    i++;
    command = arr[i];
  }

  if (curItemsInChest.length === 0) {
    console.log('Failed treasure hunt.');
  } else {
    const totalCharCount = curItemsInChest.join('').length;
    const avgTreasureGain = totalCharCount / curItemsInChest.length;

    console.log(`Average treasure gain: ${avgTreasureGain.toFixed(2)} pirate credits.`);
  }
}

solveCurTask(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);