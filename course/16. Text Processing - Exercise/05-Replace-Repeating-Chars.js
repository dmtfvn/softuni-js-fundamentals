function solveCurTask(str) {
  let newStr = '';
  let nextChar = '';

  for (const char of str) {
    if (char !== nextChar) {
      newStr += char;

      nextChar = char;
    }
  }

  console.log(newStr);
}

solveCurTask('aaaaabbbbbcdddeeeedssaa');