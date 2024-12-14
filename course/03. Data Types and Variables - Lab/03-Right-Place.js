function solveCurTask(str, char, forMatch) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '_') {
      result += char;
    } else {
      result += str[i];
    }
  }

  if (result === forMatch) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}

solveCurTask('Str_ng', 'i', 'String');