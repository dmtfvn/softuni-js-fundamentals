function solveCurTask(char1, char2) {
  const code1 = char1.charCodeAt();
  const code2 = char2.charCodeAt();

  let midChars = [];

  const smallestNum = Math.min(code1, code2);
  const largestNum = Math.max(code1, code2);

  for (let curCode = smallestNum + 1; curCode < largestNum; curCode++) {
    const curChar = String.fromCharCode(curCode);

    midChars.push(curChar);
  }

  console.log(midChars.join(' '));
}

solveCurTask('d', 'a');