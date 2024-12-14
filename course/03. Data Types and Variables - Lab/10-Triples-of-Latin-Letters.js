function solveCurTask(n) {
  let num = Number(n);

  for (let i = 0; i < num; i++) {
    const char1 = String.fromCharCode(97 + i);

    for (let j = 0; j < num; j++) {
      const char2 = String.fromCharCode(97 + j);

      for (let k = 0; k < num; k++) {
        const char3 = String.fromCharCode(97 + k);

        console.log(`${char1}${char2}${char3}`);
      }
    }
  }
}

solveCurTask('3');