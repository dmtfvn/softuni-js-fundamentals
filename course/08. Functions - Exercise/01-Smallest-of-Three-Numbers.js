function solveCurTask(n1, n2, n3) {
  let numArr = [n1, n2, n3];

  let smallestNum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < numArr.length; i++) {
    const curNum = numArr[i];

    if (curNum < smallestNum) {
      smallestNum = curNum;
    }
  }

  console.log(smallestNum);
}

solveCurTask(600, 342, 123);