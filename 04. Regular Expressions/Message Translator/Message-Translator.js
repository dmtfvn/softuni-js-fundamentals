function solveCurTask(arr) {
  const pattern = /(!)([A-Z][a-z]{2,})\1(:)(\[)([A-Za-z]{8,})(\])/;

  const strCount = Number(arr.shift());

  for (let i = 0; i < strCount; i++) {
    const curStr = arr[i];

    if (pattern.test(curStr)) {
      const translate = pattern.exec(curStr);

      const command = translate[2];
      const word = translate[5];

      const nums = [];

      for (const curChar of word) {
        const curCharCode = curChar.charCodeAt(0);

        nums.push(curCharCode);
      }

      console.log(`${command}: ${nums.join(' ')}`);
    } else {
      console.log('The message is invalid');
    }
  }
}

solveCurTask(["3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]"]);