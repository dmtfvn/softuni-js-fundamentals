function solveCurTask(input) {
  let username = input[0];
  let password = '';

  for (let i = username.length - 1; i >= 0; i--) {
    let symbol = username[i];

    password += symbol;
  }

  for (let i = 1; i < input.length; i++) {
    let passTry = input[i];

    if (passTry === password) {
      console.log(`User ${username} logged in.`);
    } else if (passTry !== password) {
      if (i === 4) {
        console.log(`User ${username} blocked!`);
      } else {
        console.log('Incorrect password. Try again.');
      }
    }
  }
}

solveCurTask(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);