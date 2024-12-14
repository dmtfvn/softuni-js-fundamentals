function solveCurTask(arr) {
  const vipList = [];
  const regList = [];

  let curEl = arr.shift();

  while (curEl !== 'PARTY') {
    const firstChar = curEl.charCodeAt(0);

    if (firstChar >= 48 && firstChar <= 57) {
      vipList.push(curEl);
    } else {
      regList.push(curEl);
    }

    curEl = arr.shift();
  }

  for (const incoming of arr) {
    if (vipList.includes(incoming)) {
      const index = vipList.indexOf(incoming);

      vipList.splice(index, 1);
    } else if (regList.includes(incoming)) {
      const index = regList.indexOf(incoming);

      regList.splice(index, 1);
    }
  }

  const absentCount = vipList.length + regList.length;

  console.log(absentCount);

  for (const guest of vipList) {
    console.log(guest);
  }

  for (const guest of regList) {
    console.log(guest);
  }
}

solveCurTask(['7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc'
  ]);