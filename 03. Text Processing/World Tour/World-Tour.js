function solveCurTask(arr) {
  let worldTourStops = arr.shift();

  let curCommand = arr.shift();

  while (curCommand !== 'Travel') {
    const tokens = curCommand.split(':');

    const command = tokens.shift();

    if (command === 'Add Stop') {
      const index = Number(tokens[0]);
      const str = tokens[1];

      if (index >= 0 && index < worldTourStops.length) {
        const leftPart = worldTourStops.slice(0, index);
        const rightPart = worldTourStops.slice(index);

        worldTourStops = leftPart.concat(str);
        worldTourStops = worldTourStops.concat(rightPart);
      }

      console.log(worldTourStops);
    } else if (command === 'Remove Stop') {
      const startIndex = Number(tokens[0]);
      const endIndex = Number(tokens[1]);

      if ((startIndex >= 0 && startIndex < worldTourStops.length) && (endIndex >= 0 && endIndex < worldTourStops.length)) {
        const leftPiece = worldTourStops.slice(0, startIndex);
        const rightPiece = worldTourStops.slice(endIndex + 1);

        worldTourStops = leftPiece.concat(rightPiece);
      }

      console.log(worldTourStops);
    } else if (command === 'Switch') {
      const oldStr = tokens[0];
      const newStr = tokens[1];

      if (worldTourStops.includes(oldStr)) {
        worldTourStops = worldTourStops.replace(oldStr, newStr);
      }

      console.log(worldTourStops);
    }

    curCommand = arr.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${worldTourStops}`);
}

solveCurTask(["Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"]);