function solveCurTask(str) {
  const numArr = str.split(' ').map(Number);

  let numSum = 0;

  for (const curNum of numArr) {
    numSum += curNum;
  }

  const avgNum = numSum / numArr.length;

  const numsGreaterThanAvg = [];

  for (const curNum of numArr) {
    if (curNum > avgNum) {
      numsGreaterThanAvg.push(curNum);
    }
  }

  if (numsGreaterThanAvg.length === 0) {
    console.log('No');
    return;
  }

  const descendSort = numsGreaterThanAvg.sort((a, b) => b - a);

  if (descendSort.length > 5) {
    descendSort.splice(5);
  }

  console.log(descendSort.join(' '));
}

solveCurTask('10 20 30 40 50');