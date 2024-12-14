function solveCurTask(arr) {
  let user = arr.shift();

  let curCommand = arr.shift();

  while (curCommand !== 'Registration') {
    const tokens = curCommand.split(' ');

    const command = tokens.shift();

    if (command === 'Letters') {
      const lowerOrUpper = tokens[0];

      if (lowerOrUpper === 'Lower') {
        user = user.toLowerCase();
      } else if (lowerOrUpper === 'Upper') {
        user = user.toUpperCase();
      }

      console.log(user);
    } else if (command === 'Reverse') {
      const [startIndex, endIndex] = tokens.map(Number);

      if ((startIndex >= 0 && startIndex < user.length) && (endIndex >= 0 && endIndex < user.length)) {
        const str = user.substring(startIndex, endIndex + 1);

        const reversedStr = str.split('').reverse().join('');

        console.log(reversedStr);
      }
    } else if (command === 'Substring') {
      const str = tokens[0];

      if (user.includes(str)) {
        user = user.replace(str, '');

        console.log(user);
      } else {
        console.log(`The username ${user} doesn't contain ${str}.`);
      }
    } else if (command === 'Replace') {
      const char = tokens[0];

      if (user.includes(char)) {
        while (user.includes(char)) {
          user = user.replace(char, '-');
        }
      }

      console.log(user);
    } else if (command === 'IsValid') {
      const specialChar = tokens[0];

      if (user.includes(specialChar)) {
        console.log('Valid username.');
      } else {
        console.log(`${specialChar} must be contained in your username.`);
      }
    }

    curCommand = arr.shift();
  }
}

solveCurTask([
  'ThisIsSoftUni',
  'Reverse 1 3',
  'Replace S',
  'Substring hi',
  'Registration'
]);