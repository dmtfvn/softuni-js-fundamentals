function solveCurTask(arr) {
  const parkingLot = new Set();

  for (const tokens of arr) {
    const [action, regNum] = tokens.split(', ');

    if (action === 'IN') {
      parkingLot.add(regNum);
    } else if (action === 'OUT') {
      parkingLot.delete(regNum);
    }
  }

  const newArr = Array.from(parkingLot);
  newArr.sort((a, b) => a.localeCompare(b));

  if (newArr.length === 0) {
    console.log('Parking Lot is Empty');
  } else {
    console.log(newArr.join('\n'));
  }
}

solveCurTask(['IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU']);