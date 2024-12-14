function solveCurTask(arr) {
  let password = arr.shift();

  let curCommand = arr.shift();

  while (curCommand !== 'Done') {
    const tokens = curCommand.split(' ');

    const command = tokens.shift();

    if (command === 'TakeOdd') {
      let temp = '';

      for (let i = 1; i < password.length; i += 2) {
        const curChar = password[i];

        temp = temp.concat(curChar);
      }

      password = temp;

      console.log(password);
    } else if (command === 'Cut') {
      const [index, length] = tokens.map(Number);

      const substr = password.slice(index, index + length);

      password = password.replace(substr, '');

      console.log(password);
    } else if (command === 'Substitute') {
      const [oldStr, newStr] = tokens;

      if (password.includes(oldStr)) {
        while (password.includes(oldStr)) {
          password = password.replace(oldStr, newStr);
        }

        console.log(password);
      } else {
        console.log('Nothing to replace!');
      }
    }

    curCommand = arr.shift();
  }

  console.log(`Your password is: ${password}`);
}

solveCurTask(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done"]);