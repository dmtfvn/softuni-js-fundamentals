function solveCurTask(arr) {
  const lecturesCount = Number(arr[1]);
  const bonus = Number(arr[2]);

  let maxBonus = 0;
  let maxAttends = 0;

  for (let i = 3; i < arr.length; i++) {
    const curAttends = Number(arr[i]);

    let finalBonus = curAttends / lecturesCount * (5 + bonus);

    if (finalBonus > maxBonus) {
      maxBonus = finalBonus;
    }

    if (curAttends > maxAttends) {
      maxAttends = curAttends;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttends} lectures.`);
}

solveCurTask(['5', '25', '30', '12', '19', '24', '16', '20']);