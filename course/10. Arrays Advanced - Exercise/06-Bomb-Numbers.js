function solveCurTask(sequence, bomb) {
  const [bombNum, bombPower] = bomb;

  while (sequence.includes(bombNum)) {
    const index = sequence.indexOf(bombNum);

    let start = index - bombPower;
    let targetCount = 1 + bombPower * 2;

    if (start < 0) {
      targetCount += start;
      start = 0;
    }

    sequence.splice(start, targetCount);
  }

  let sequenceNumSum = 0;

  for (num of sequence) {
    sequenceNumSum += num;
  }

  console.log(sequenceNumSum);
}

solveCurTask([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
  [2, 1]);