function solveCurTask(num) {
  let matrix = [];

  function makeRow(n) {
    const row = [];

    for (let i = 0; i < n; i++) {
      const rowElem = n;

      row.push(rowElem);
    }

    return row.join(' ');
  }

  while (matrix.length !== num) {
    matrix.push(makeRow(num));
  }

  console.log(matrix.join('\n'));
}

solveCurTask(3);