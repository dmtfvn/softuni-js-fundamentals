function solveCurTask(str) {
  const demonsPool = {};

  const demons = str.split(/\s*,\s*/g);

  const charFilter = /[^0-9+\-*\/.]/g;

  const numFilter = /-?\d+\.?\d*/g;

  for (const curDemon of demons) {
    let health = 0;
    let damage = 0;

    for (const curChar of curDemon) {
      if (curChar.match(charFilter)) {
        const value = curChar.charCodeAt(0);
  
        health += value;
      }
    }

    let validNum = numFilter.exec(curDemon);

    while (validNum !== null) {
      const num = Number(validNum);

      damage += num;

      validNum = numFilter.exec(curDemon);
    }

    let temp = curDemon;

    while (temp.includes('*')) {
      damage *= 2;

      temp = temp.replace('*', '');
    }

    while (temp.includes('/')) {
      damage /= 2;

      temp = temp.replace('/', '');
    }

    demonsPool[curDemon] = [health, damage];
  }

  const tier = Object.entries(demonsPool);
  tier.sort((a, b) => a[0].localeCompare(b[0]));

  for (const tokens of tier) {
    const name = tokens[0];
    const health = tokens[1][0];
    const damage = tokens[1][1];

    console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
  }
}

solveCurTask('M3ph1st0**, Azazel');