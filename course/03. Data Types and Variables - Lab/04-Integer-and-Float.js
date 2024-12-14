function solveCurTask(firstNum, secondNum, thirdNum) {
  const sum = firstNum + secondNum + thirdNum;
  const toString = String(sum);

  let isFloat = false;

  for (let i = 0; i < toString.length; i++) {
    if (toString[i] === '.') {
      isFloat = true;
      break;
    }
  }

  const numType = isFloat ? 'Float' : 'Integer';

  console.log(`${sum} - ${numType}`);
}

solveCurTask(9, 100, 1.1);