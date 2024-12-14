function solveCurTask(num) {
  let sumDivisors = 0;

  for (let divisor = 1; divisor < num; divisor++) {
    if (num % divisor === 0) {
      sumDivisors += divisor;
    }
  }

  if (num === sumDivisors) {
    console.log('We have a perfect number!');
  } else {
    console.log("It's not so perfect.");
  }
}

solveCurTask(6);