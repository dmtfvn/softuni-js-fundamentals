function solveCurTask(arr) {
  function checkForPalindrome(num) {
    const numString = `${num}`;
    let numStringReversed = '';

    for (let i = numString.length - 1; i >= 0; i--) {
      const curChar = numString[i];

      numStringReversed += curChar;
    }

    return numString === numStringReversed;
  }

  for (const num of arr) {
    const isNumPalindrome = checkForPalindrome(num);

    console.log(isNumPalindrome);
  }
}

solveCurTask([123, 323, 421, 121]);