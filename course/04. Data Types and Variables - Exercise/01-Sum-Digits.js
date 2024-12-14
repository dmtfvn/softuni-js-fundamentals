function solveCurTask(int) {
  const num = String(int);

  let result = 0;

  for (let i = 0; i < num.length; i++) {
    const char = Number(num[i]);

    result += char;
  }

  console.log(result);
}

solveCurTask(245678);