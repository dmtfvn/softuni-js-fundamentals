function solveCurTask(arr) {
  let str = arr.shift();

  let curCommand = arr.shift();

  while (curCommand !== 'End') {
    const tokens = curCommand.split(' ');

    const command = tokens.shift();

    if (command === 'Translate') {
      const char = tokens.shift();
      const replacement = tokens.shift();

      str = str.split(char).join(replacement);

      console.log(str);
    } else if (command === 'Includes') {
      const substring = tokens.shift();

      if (str.includes(substring)) {
        console.log('True');
      } else {
        console.log('False');
      }
    } else if (command === 'Start') {
      const substring = tokens.shift();

      if (str.startsWith(substring)) {
        console.log('True');
      } else {
        console.log('False');
      }
    } else if (command === 'Lowercase') {
      str = str.toLowerCase();

      console.log(str);
    } else if (command === 'FindIndex') {
      const char = tokens.shift();
      const charLastIndex = str.lastIndexOf(char);

      console.log(charLastIndex);
    } else if (command === 'Remove') {
      const [startIndex, count] = tokens.map(Number);

      const substring = str.slice(startIndex, count + startIndex);

      str = str.replace(substring, '');

      console.log(str);
    }

    curCommand = arr.shift();
  }
}

solveCurTask(["*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End"]);