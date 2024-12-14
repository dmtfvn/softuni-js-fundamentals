function solveCurTask(arrNums, arrCmds) {
  for (const cmd of arrCmds) {
    const tokens = cmd.split(' ');

    const action = tokens.shift();

    if (action === 'add') {
      const idx = Number(tokens.shift());
      const elem = Number(tokens.shift());

      arrNums.splice(idx, 0, elem);
    } else if (action === 'addMany') {
      let idx = Number(tokens.shift());

      for (const element of tokens) {
        const numElem = Number(element);

        arrNums.splice(idx, 0, numElem);
        idx++;
      }
    } else if (action === 'contains') {
      const elem = Number(tokens.shift());

      const elemIdx = arrNums.indexOf(elem);

      console.log(elemIdx);
    } else if (action === 'remove') {
      const idx = Number(tokens.shift());

      arrNums.splice(idx, 1);
    } else if (action === 'shift') {
      const rotations = Number(tokens.shift());

      for (let i = 1; i <= rotations; i++) {
        const firstElem = arrNums.shift();
        arrNums.push(firstElem);
      }
    } else if (action === 'sumPairs') {
      const newArr = [];

      for (let i = 0; i < arrNums.length; i += 2) {
        const curNum = arrNums[i];
        const nextNum = arrNums[i + 1];

        if (nextNum === undefined) {
          newArr.push(curNum);
        } else {
          newArr.push(curNum + nextNum);
        }
      }

      arrNums = newArr;
    } else if (action === 'print') {
      console.log(`[ ${arrNums.join(', ')} ]`);
    }
  }
}

solveCurTask([1, 2, 4, 5, 6, 7],
  ['add 1 8', 'contains 1', 'contains 3', 'print']);