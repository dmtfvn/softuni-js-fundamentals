function solveCurTask(arr) {
  const keyWords = {};

  const targetWords = arr.shift().split(' ');

  for (const word of targetWords) {
    keyWords[word] = 0;
  }

  for (const word of arr) {
    if (word in keyWords) {
      keyWords[word]++;
    }
  }

  const arrOfTuples = Object.entries(keyWords);
  arrOfTuples.sort((a, b) => b[1] - a[1]);

  for (const [word, count] of arrOfTuples) {
    console.log(`${word} - ${count}`);
  }
}

solveCurTask([
  'is the', 
  'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);