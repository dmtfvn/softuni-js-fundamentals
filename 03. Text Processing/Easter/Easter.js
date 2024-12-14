function solveCurTask(arr) {
  let str = arr.shift();

  let curCommand = arr.shift();

  while (curCommand !== 'Easter') {
    const tokens = curCommand.split(' ');

    const action = tokens.shift();

    if (action === 'Replace') {
      const curChar = tokens.shift();
      const newChar = tokens.shift();

      str = str.split(curChar).join(newChar);

      console.log(str);
    } else if (action === 'Remove') {
      const substr = tokens.shift();

      str = str.replace(substr, '');

      console.log(str);
    } else if (action === 'Includes') {
      const substr = tokens.shift();

      if (str.includes(substr)) {
        console.log('True');
      } else {
        console.log('False');
      }
    } else if (action === 'Change') {
      const lowerUpper = tokens.shift();

      if (lowerUpper === 'Lower') {
        str = str.toLowerCase();
      } else if (lowerUpper === 'Upper') {
        str = str.toUpperCase();
      }

      console.log(str);
    } else if (action === 'Reverse') {
      const [startIndex, endIndex] = tokens.map(Number);

      if ((startIndex >= 0 && startIndex <= str.length) && (endIndex >= 0 && endIndex <= str.length)) {
        const substr = str.substring(startIndex, endIndex + 1);
        const reversedStr = substr.split('').reverse().join('');
  
        console.log(reversedStr);
      }
    }

    curCommand = arr.shift();
  }
}

solveCurTask(['Easterbscomming',
  'Replace b I',
  'Remove commIng',
  'Change Upper',
  'Reverse 0 5',
  'Easter']);