function solveCurTask(arr) {
  let energy = arr[0];
  
  let wins = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 'End of battle') {
      console.log(`Won battles: ${wins}. Energy left: ${energy}`);
      return;
    }

    const curValue = Number(arr[i]);

    if (energy < curValue) {
      break;
    }

    energy -= curValue;

    wins++;

    if (wins % 3 === 0) {
      energy += wins;
    }
  }

  console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
}

solveCurTask(["200", "54", "14", "28", "13", "End of battle"]);