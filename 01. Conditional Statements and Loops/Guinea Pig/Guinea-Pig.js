function solveCurTask(input) {
  let foodGrams = Number(input[0]) * 1000;
  let hayGrams = Number(input[1]) * 1000;
  let coverGrams = Number(input[2]) * 1000;

  let guineWeigthGrams = Number(input[3]) * 1000;

  for (let i = 1; i <= 30; i++) {
    let curDay = i;

    foodGrams -= 300;

    if (curDay % 2 === 0) {
      hayGrams -= foodGrams * 0.05;
    }

    if (curDay % 3 === 0) {
      coverGrams -= guineWeigthGrams / 3;
    }

    if (foodGrams <= 0 || hayGrams <= 0 || coverGrams <= 0) {
      console.log('Merry must go to the pet store!');
      return;
    }
  }

  let foodKgs = foodGrams / 1000;
  let hayKgs = hayGrams / 1000;
  let coverKgs = coverGrams / 1000;

  if (foodKgs >= 0 && hayKgs >= 0 && coverKgs >= 0) {
    console.log(`Everything is fine! Puppy is happy! Food: ${foodKgs.toFixed(2)}, Hay: ${hayKgs.toFixed(2)}, Cover: ${coverKgs.toFixed(2)}.`);
  }
}

solveCurTask(["9", "5", "5.2", "1"]);