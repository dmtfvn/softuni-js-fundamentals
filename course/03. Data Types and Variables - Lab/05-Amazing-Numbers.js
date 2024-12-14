function solveCurTask(num) {
  const toString = String(num);

  let sum = 0;

  for (let i = 0; i < toString.length; i++) {
    const value = toString[i];

    sum += Number(value);
  }

  const sumString = String(sum);

  let isAmazing = false;

  for (let i = 0; i < sumString.length; i++) {
    if (sumString[i] === '9') {
      isAmazing = true;
      break;
    }
  }

  const check = isAmazing ? 'True' : 'False';

  console.log(`${num} Amazing? ${check}`);
}

solveCurTask(1233);