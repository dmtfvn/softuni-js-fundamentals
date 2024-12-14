function solveCurTask(baseStep, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;

  let stepCount = 1;

  while ((baseStep - 2) >= 1) {
    let curStep = baseStep - 2;
    let bulkArea = curStep ** 2;

    stone += bulkArea * increment;

    let square = baseStep ** 2;
    let inner = bulkArea;
    let outer = square - inner;

    if (stepCount % 5 !== 0) {
      marble += outer * increment;
    } else {
      lapis += outer * increment;
    }

    stepCount++;
    baseStep -= 2;
  }

  let gold = (baseStep ** 2) * increment;

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);

  console.log(`Final pyramid height: ${Math.floor(stepCount * increment)}`);
}

solveCurTask(12, 1);