function solveCurTask(str) {
  const pattern = /([@#])([a-z]{3,})\1\1([a-z]{3,})\1/gi;

  let countPairs = 0;

  const mirrorWords = [];

  let pairWords = pattern.exec(str);

  while (pairWords) {
    const [, , firstWord, secondWord] = pairWords;

    const secondReversed = secondWord.split('').reverse().join('');

    if (firstWord === secondReversed) {
      const pair = `${firstWord} <=> ${secondWord}`;

      mirrorWords.push(pair);
    }

    countPairs++;

    pairWords = pattern.exec(str);
  }

  if (countPairs >= 1) {
    console.log(`${countPairs} word pairs found!`);
  } else {
    console.log('No word pairs found!');
  }

  if (mirrorWords.length >= 1) {
    console.log('The mirror words are:');
    console.log(mirrorWords.join(', '));
  } else {
    console.log('No mirror words!');
  }
}

solveCurTask('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r');