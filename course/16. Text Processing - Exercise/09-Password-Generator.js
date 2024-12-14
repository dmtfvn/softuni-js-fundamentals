function solveCurTask(arr) {
  const [firstWord, secondWord, specialWord] = arr;

  let password = firstWord.concat(secondWord);

  let specialWordIndex = 0;

  for (const char of password) {
    if (/[aeiou]/.test(char)) {
      const replaceChar = specialWord[specialWordIndex];

      password = password.replace(char, replaceChar.toUpperCase());

      specialWordIndex++;

      if (specialWordIndex === specialWord.length) {
        specialWordIndex = 0;
      }
    }
  }

  const reversedPass = password.split('').reverse().join('');

  console.log(`Your generated password is ${reversedPass}`);
}

solveCurTask([
  'ilovepizza', 'ihatevegetables',
  'orange'
  ]);