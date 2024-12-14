function solveCurTask(arr) {
  let letter = arr[0];
  const replaceWords = arr[1];

  const words = letter.split(/[,.]? /);

  const templates = words.filter(el => el.includes('_'));

  for (const temp of templates) {
    const correctWord = replaceWords.find(el => el.length === temp.length);

    letter = letter.replace(temp, correctWord);
  }

  console.log(letter);
}

solveCurTask(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);