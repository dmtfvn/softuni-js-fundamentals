function solveCurTask(arr) {
  let activationKey = arr.shift();

  let curCommand = arr.shift();

  while (curCommand !== 'Generate') {
    const tokens = curCommand.split('>>>');
    
    const command = tokens.shift();

    if (command === 'Contains') {
      const substr = tokens[0];

      if (activationKey.includes(substr)) {
        console.log(`${activationKey} contains ${substr}`);
      } else {
        console.log('Substring not found!');
      }
    } else if (command === 'Flip') {
      const upperLower = tokens.shift();

      const [startIndex, endIndex] = tokens.map(Number);

      const oldStr = activationKey.slice(startIndex, endIndex);

      let newStr = oldStr;

      if (upperLower === 'Upper') {
        newStr = newStr.toUpperCase();
      } else if (upperLower === 'Lower') {
        newStr = newStr.toLowerCase();
      }

      activationKey = activationKey.replace(oldStr, newStr);

      console.log(activationKey);
    } else if (command === 'Slice') {
      const [startIndex, endIndex] = tokens.map(Number);

      const substr = activationKey.slice(startIndex, endIndex);

      activationKey = activationKey.replace(substr, '');

      console.log(activationKey);
    }

    curCommand = arr.shift();
  }

  console.log(`Your activation key is: ${activationKey}`);
}

solveCurTask(["abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate"]);