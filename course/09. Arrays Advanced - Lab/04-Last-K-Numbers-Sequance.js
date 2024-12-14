function solveCurTask(n, k) {
  const curArr = [1];

  for (let i = 1; i < n; i++) {
    const cloneArr = curArr.slice(-k);

    let sum = 0;

    for (const curNum of cloneArr) {
      sum += curNum;
    }

    curArr.push(sum);
  }

  console.log(curArr.join(' '));
}

solveCurTask(6, 3);