function solveCurTask(arr) {
  let neighborhood = arr.shift().split('@').map(Number);

  let curHouseIndex = 0;

  let i = 0;
  let command = arr[i];

  while (command !== 'Love!') {
    const elems = command.split(' ');

    const jumpIndex = Number(elems.pop());

    curHouseIndex += jumpIndex;

    if (curHouseIndex >= 0 && curHouseIndex < neighborhood.length) {
      if (neighborhood[curHouseIndex] === 0) {
        console.log(`Place ${curHouseIndex} already had Valentine's day.`);

        i++;
        command = arr[i];
        continue;
      } else {
        neighborhood[curHouseIndex] -= 2;
      }
    } else {
      curHouseIndex = 0;

      if (neighborhood[curHouseIndex] === 0) {
        console.log(`Place ${curHouseIndex} already had Valentine's day.`);

        i++;
        command = arr[i];
        continue;
      } else {
        neighborhood[curHouseIndex] -= 2;
      }
    }

    if (neighborhood[curHouseIndex] === 0) {
      console.log(`Place ${curHouseIndex} has Valentine's day.`);
    }

    i++;
    command = arr[i];
  }

  console.log(`Cupid's last position was ${curHouseIndex}.`);

  let hearth = 0;
  let fail = 0;

  for (const house of neighborhood) {
    if (house === 0) {
      hearth++;
    } else {
      fail++;
    }
  }

  if (neighborhood.length === hearth) {
    console.log('Mission was successful.');
  } else {
    console.log(`Cupid has failed ${fail} places.`);
  }
}

solveCurTask(["2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!"]);