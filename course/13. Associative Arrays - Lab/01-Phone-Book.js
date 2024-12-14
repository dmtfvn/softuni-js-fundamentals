function solveCurTask(arr) {
  const phoneBook = {};

  for (const data of arr) {
    const [name, phoneNum] = data.split(' ');

    phoneBook[name] = phoneNum;
  }

  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

solveCurTask(['Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344']);