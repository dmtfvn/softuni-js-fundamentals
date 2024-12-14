function solveCurTask(text, word) {
  const censored = '*'.repeat(word.length);

  while (text.includes(word)) {
    text = text.replace(word, censored);
  }

  console.log(text);
}

solveCurTask('A small sentence with some words', 'small');