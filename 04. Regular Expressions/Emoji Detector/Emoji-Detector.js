function solveCurTask(arr) {
  const pattern = /([:]{2}|[*]{2})([A-Z]{1}[a-z]{2,})\1/g;

  const temp = [];

  const text = arr.shift();

  for (const curChar of text) {
    const curCharCode = curChar.charCodeAt(0);

    if (curCharCode >= 48 && curCharCode <= 57) {
      temp.push(curChar);
    }
  }

  const coolThreshold = temp.reduce((acc, value) => acc * value);

  let emojisCount = 0;
  const coolEmojis = [];

  let tokens = pattern.exec(text);

  while (tokens) {
    const curEmoji = tokens[0];
    const emojiChars = tokens[2].split('');

    const arrOfCharCodes = emojiChars.map(el => el.charCodeAt(0));

    const threshold = arrOfCharCodes.reduce((acc, value) => acc + value);

    if (threshold > coolThreshold) {
      coolEmojis.push(curEmoji);
    }

    emojisCount++;

    tokens = pattern.exec(text);
  }

  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(`${emojisCount} emojis found in the text. The cool ones are:`);
  console.log(coolEmojis.join('\n'));
}

solveCurTask(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);