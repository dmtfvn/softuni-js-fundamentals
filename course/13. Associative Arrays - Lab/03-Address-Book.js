function solveCurTask(arr) {
  const personAddress = {};

  for (const data of arr) {
    const [name, address] = data.split(':');

    personAddress[name] = address;
  }

  const tuples = Object.entries(personAddress);

  tuples.sort(([a], [b]) => a.localeCompare(b));

  for (const [name, address] of tuples) {
    console.log(`${name} -> ${address}`);
  }
}

solveCurTask(['Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd']);