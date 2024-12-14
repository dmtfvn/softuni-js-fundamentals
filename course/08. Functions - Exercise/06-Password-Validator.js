function solveCurTask(password) {
  function checkForValidLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      console.log('Password must be between 6 and 10 characters');
      return false;
    }
  }

  function checkForAlphanumeric(pass) {
    const pattern = /^[A-Za-z0-9]+$/;

    if (pattern.test(pass)) {
      return true;
    } else {
      console.log('Password must consist only of letters and digits');
      return false;
    }
  }

  function checkForTwoOrMoreDigits(pass) {
    const pattern = /[0-9]{2,}/;

    if (pattern.test(pass)) {
      return true;
    } else {
      console.log('Password must have at least 2 digits');
      return false;
    }
  }

  const isValidLength = checkForValidLength(password);
  const isAlphanumeric = checkForAlphanumeric(password);
  const isTwoOrMoreDigits = checkForTwoOrMoreDigits(password);

  if (isValidLength && isAlphanumeric && isTwoOrMoreDigits) {
    console.log('Password is valid');
  }
}

solveCurTask('logIn');