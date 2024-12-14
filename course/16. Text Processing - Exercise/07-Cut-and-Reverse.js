function solveCurTask(str) {
  const midIndex = str.length / 2;

  const leftHalf = str.substring(0, midIndex)
    .split('')
    .reverse()
    .join('');

  const rightHalf = str.substring(midIndex)
    .split('')
    .reverse()
    .join('');

  console.log(leftHalf);
  console.log(rightHalf);
}

solveCurTask('tluciffiDsIsihTgnizamAoSsIsihT');