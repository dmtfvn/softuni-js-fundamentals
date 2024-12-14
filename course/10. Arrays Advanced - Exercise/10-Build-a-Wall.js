function solveCurTask(arr) {
  let sections = arr.map(Number);

  const concretePerDay = [];
  let totlaCost = 0;

  let isDone = false;

  const volumeConcretePerCrew = 195;
  const cubicConcrete = 1900;

  while (isDone === false) {
    let dailyMaterial = 0;

    for (let i = 0; i < sections.length; i++) {
      if (sections[i] < 30) {
        sections[i]++;
        dailyMaterial += volumeConcretePerCrew;
      }
    }

    concretePerDay.push(dailyMaterial);

    totlaCost += dailyMaterial * cubicConcrete;

    if (sections.every(h => h === 30)) {
      isDone = true;
    }
  }

  console.log(concretePerDay.join(', '));
  console.log(`${totlaCost} pesos`);
}

solveCurTask([17, 22, 17, 19, 17]);