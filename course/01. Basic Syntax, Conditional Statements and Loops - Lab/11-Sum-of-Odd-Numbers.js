function solveCurTask(num) {
  let int = Number(num);
  let count = 0;
  let sum = 0;

  for (let i = 1; i <= 100; i += 2) {
    console.log(i);

    count++;

    sum += i;

    if (count === int) {
      console.log(`Sum: ${sum}`);
      break;
    }
  }
}

solveCurTask(3);