function solveCurTask(start, end) {
  let printNums = '';
  let sum = 0;

  for (let i = start; i <= end; i++) {
    printNums += i + ' ';
    sum += i;
  }

  console.log(printNums);
  console.log(`Sum: ${sum}`);
}

solveCurTask(5, 10);