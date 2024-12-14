function solveCurTask(num) {
  const str = String(num);

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < str.length; i++) {
    const curValue = Number(str[i]);

    if (curValue % 2 === 0) {
      evenSum += curValue;
    } else {
      oddSum += curValue;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solveCurTask(3495892137259234);