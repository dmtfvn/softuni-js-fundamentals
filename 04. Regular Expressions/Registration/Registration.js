function solveCurTask(arr) {
  const pattern = /(U\$)([A-Z][a-z]{2,})\1(P@\$)([A-Za-z]{5,}\d+)\3/;

  const valid = [];

  const count = arr.shift();

  for (let i = 0; i < count; i++) {
    const curLine = arr[i];

    if (pattern.test(curLine)) {
      const tokens = pattern.exec(curLine);
  
      const username = tokens[2];
      const password = tokens[4];

      console.log('Registration was successful');

      const validData = `Username: ${username}, Password: ${password}`;
      console.log(validData);

      valid.push(validData);
    } else {
      console.log('Invalid username or password');
    }
  }

  console.log(`Successful registrations: ${valid.length}`);
}

solveCurTask(["3",
  "U$myU$-->P@$asdqwe123P@$",
  "Sara 1232412",
  "U$NameU$P@$Pass234P@$"]);