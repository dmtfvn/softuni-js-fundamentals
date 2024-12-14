function solveCurTask(arr) {
  let message = arr.shift();

  let curCommand = arr.shift();

  while (curCommand !== 'Reveal') {
    const tokens = curCommand.split(':|:');

    const command = tokens.shift();

    if (command === 'InsertSpace') {
      const index = Number(tokens[0]);

      const leftSide = message.slice(0, index);
      const rightSide = message.slice(index);

      message = `${leftSide} ${rightSide}`;
    } else if (command === 'Reverse') {
      const substr = tokens[0];

      if (message.includes(substr)) {
        const newSubstr = substr.split('').reverse().join('');

        message = message.replace(substr, '').concat(newSubstr);
      } else {
        console.log('error');

        curCommand = arr.shift();
        continue;
      }
    } else if (command === 'ChangeAll') {
      const substr = tokens[0];
      const newStr = tokens[1];

      message = message.split(substr).join(newStr);
    }

    console.log(message);

    curCommand = arr.shift();
  }

  console.log(`You have a new text message: ${message}`);
}

solveCurTask([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]);