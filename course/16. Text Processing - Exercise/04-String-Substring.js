function solveCurTask(word, text) {
  const allLowerCase = text.toLowerCase();

  const arr = allLowerCase.split(' ');

  if (arr.includes(word)) {
    console.log(word);

    return;
  } else {
    console.log(`${word} not found!`);
  }
}

solveCurTask('javascript',
'JavaScript is the best programming language');