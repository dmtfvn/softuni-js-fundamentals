function solveCurTask(num) {
  let arr = [10, 7, 6, 3, 2];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (num % value === 0) {
      console.log(`The number is divisible by ${value}`);
      return;
    }
  }

  console.log('Not divisible');
}

solveCurTask(12);