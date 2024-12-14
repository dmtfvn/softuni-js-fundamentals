function solveCurTask(str, word) {
  const arr = str.split(' ');

  let count = 0;

  for (const keyWord of arr) {
    if (keyWord === word) {
      count++;
    }
  }

  console.log(count);
}

solveCurTask('This is a word and it also is a sentence',
'is');