function solveCurTask(str, count) {
  let result = '';

  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

console.log(solveCurTask("abc", 3));