function solveCurTask(arr) {
  const decryptions = [];

  const regExStar = /[star]/gi;

  const messageCount = Number(arr.shift());

  for (let i = 0; i < messageCount; i++) {
    const encryptedMsg = arr[i];

    const decryptKey = encryptedMsg.match(regExStar) && encryptedMsg.match(regExStar).length;

    let decryptedMsg = '';

    for (const curChar of encryptedMsg) {
      let curCharValue = curChar.charCodeAt(0);

      curCharValue -= decryptKey;

      const newChar = String.fromCharCode(curCharValue);

      decryptedMsg = decryptedMsg.concat(newChar);
    }

    decryptions.push(decryptedMsg);
  }

  const pattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<threat>[A|D])![^@\-!:>]*->(?<soldiers>\d+)/g;

  let attackedCount = 0;
  const attackedPlanets= [];

  let destroyedCount = 0;
  const destroyedPlanets = [];

  let planetData = pattern.exec(decryptions);

  while (planetData !== null) {
    const {planet, threat} = planetData.groups;

    if (threat === 'A') {
      attackedCount++;

      attackedPlanets.push(planet);
    }

    if (threat === 'D') {
      destroyedCount++;

      destroyedPlanets.push(planet);
    }

    planetData = pattern.exec(decryptions);
  }

  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attackedCount}`);

  if (attackedCount > 0) {
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));
  }

  console.log(`Destroyed planets: ${destroyedCount}`);

  if (destroyedCount > 0) {
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
  }
}

solveCurTask(['3',
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR']);