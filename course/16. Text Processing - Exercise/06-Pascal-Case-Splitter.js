function solveCurTask(str) {
  const pattern = /[A-Z][a-z]*/g;

  const words = str.matchAll(pattern);

  const arrOfWords = [];

  for (const curWord of words) {
    arrOfWords.push(curWord[0]);
  }

  console.log(arrOfWords.join(', '));
}

solveCurTask('SplitMeIfYouCanHaHaYouCantOrYouCan');