function solveCurTask(arr) {
  const racers = {};

  const names = arr.shift().split(', ');

  names.forEach(el => racers[el] = 0);

  const lettersRegEx = /[A-Za-z]/g;
  const digitsRegEx = /\d/g;

  let command = arr.shift();

  while (command !== 'end of race') {
    const lettersMatch = command.match(lettersRegEx);
    const digitsMatch = command.match(digitsRegEx);

    const name = lettersMatch.join('');

    if (name in racers) {
      const distance = digitsMatch.map(Number).reduce((acc, value) => acc + value);

      racers[name] += distance;
    }

    command = arr.shift();
  }

  const newArr = Object.entries(racers);
  newArr.sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${newArr[0][0]}`);
  console.log(`2nd place: ${newArr[1][0]}`);
  console.log(`3rd place: ${newArr[2][0]}`);
}

solveCurTask([
  'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
  'Mi*&^%$ch123o!#$%#nne787) ',
  '%$$B(*&&)i89ll)*&) ',
  'R**(on%^&ald992) ',
  'T(*^^%immy77) ',
  'Ma10**$#g0g0g0i0e',
  'end of race'
]);