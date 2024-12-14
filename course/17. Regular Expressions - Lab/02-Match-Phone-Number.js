function solveCurTask(arr) {
  const regEx = /\+359([-\s])2\1[0-9]{3}\1[0-9]{4}\b/g;

  const validPhones = [];

  let validNum;

  while (validNum !== null) {
    validNum = regEx.exec(arr[0]);

    if (validNum === null) {
      break;
    }

    validPhones.push(validNum[0]);
  }

  console.log(validPhones.join(', '));
}

solveCurTask(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);