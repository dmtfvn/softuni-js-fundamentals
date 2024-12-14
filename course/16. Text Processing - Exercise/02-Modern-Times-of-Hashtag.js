function solveCurTask(str) {
  const words = str.split(' ');

  const hashWords = words.filter(el => el.startsWith('#') && el.length > 1);

  const regEx = /\b[A-Za-z]+\b/;

  for (let hashtag of hashWords) {
    hashtag = hashtag.substring(1);

    if (regEx.test(hashtag)) {
      console.log(hashtag);
    }
  }
}

solveCurTask('Nowadays everyone uses # to tag a #special word in #socialMedia');