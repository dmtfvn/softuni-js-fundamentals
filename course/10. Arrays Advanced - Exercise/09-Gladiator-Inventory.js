function solveCurTask(arr) {
  const inventory = arr.shift().split(' ');

  for (const command of arr) {
    const values = command.split(' ');

    const action = values.shift();
    const equipment = values.shift();

    if (action === 'Buy') {
      if (!inventory.includes(equipment)) {
        inventory.push(equipment);
      }
    } else if (action === 'Trash') {
      const equipmentIdx = inventory.indexOf(equipment);

      if (equipmentIdx !== -1) {
        inventory.splice(equipmentIdx, 1);
      }
    } else if (action === 'Repair') {
      const equipmentIdx = inventory.indexOf(equipment);

      if (equipmentIdx !== -1) {
        inventory.splice(equipmentIdx, 1);
        inventory.push(equipment);
      }
    } else if (action === 'Upgrade') {
      const equipmentItems = equipment.split('-');

      const oldItem = equipmentItems.shift();
      const upgrade = equipmentItems.shift();

      const oldItemIdx = inventory.indexOf(oldItem);

      if (oldItemIdx !== -1) {
        inventory.splice(oldItemIdx + 1, 0, `${oldItem}:${upgrade}`);
      }
    }
  }

  console.log(inventory.join(' '));
}

solveCurTask(['SWORD Shield Spear',
  'Buy Bag',
  'Trash Shield',
  'Repair Spear',
  'Upgrade SWORD-Steel']);