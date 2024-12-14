function solveCurTask(words, text) {
  const replaceWords = words.split(', ');

  const arrOfWords = text.split(' ');

  const templates = arrOfWords.filter(el => el.includes('*'));

  for (const temp of templates) {
    const correctWord = replaceWords.find(el => el.length === temp.length);

    text = text.replace(temp, correctWord);
  }

  console.log(text);
}

solveCurTask('great',
'softuni is ***** place for learning new programming languages');