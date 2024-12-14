function solveCurTask(arr) {
  let message = arr.shift();

  let curCommand = arr.shift();

  while (curCommand !== 'Decode') {
    const tokens = curCommand.split('|');

    const command = tokens.shift();

    if (command === 'Move') {
      const charsCount = Number(tokens[0]);

      const startChars = message.slice(0, charsCount);
      const restOfChars = message.slice(charsCount);

      message = restOfChars.concat(startChars);
    } else if (command === 'Insert') {
      const index = Number(tokens[0]);
      const value = tokens[1];

      const leftPart = message.slice(0, index);
      const rightPart = message.slice(index);

      message = leftPart.concat(value);
      message = message.concat(rightPart);
    } else if (command === 'ChangeAll') {
      const str = tokens[0];
      const replaceStr = tokens[1];

      message = message.split(str).join(replaceStr);
    }

    curCommand = arr.shift();
  }

  console.log(`The decrypted message is: ${message}`);
}

solveCurTask([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);