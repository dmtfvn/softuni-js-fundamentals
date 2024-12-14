function solveCurTask(num) {
  for (let i = 1; i <= 10; i++) {
    let step = i;
    let result = num * step;

    console.log(`${num} X ${step} = ${result}`);
  }
}

solveCurTask(5);