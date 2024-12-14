function solveCurTask(text) {
  const stringsArr = text.split(' ').filter(el => el.length > 1);

  let totalSum = 0;

  for (const curStr of stringsArr) {
    const curChars = curStr.split('');

    const firstChar = curChars.shift();
    const lastChar = curChars.pop();

    let curNum = Number(curChars.join(''));

    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (upperCase.test(firstChar)) {
      const charPosition = curStr.charCodeAt(0) - 64;

      curNum /= charPosition;
    } else if (lowerCase.test(firstChar)) {
      const charPosition = curStr.charCodeAt(0) - 96;

      curNum *= charPosition;
    }

    if (upperCase.test(lastChar)) {
      const charPosition = curStr.charCodeAt(curStr.length - 1) - 64;

      curNum -= charPosition;
    } else if (lowerCase.test(lastChar)) {
      const charPosition = curStr.charCodeAt(curStr.length - 1) - 96;

      curNum += charPosition;
    }

    totalSum += curNum;
  }

  console.log(totalSum.toFixed(2));
}

solveCurTask('P34562Z q2576f   H456z');