function solveCurTask(jsonStr) {
  const person = JSON.parse(jsonStr);

  const arrWithTuples = Object.entries(person);

  for (const tuple of arrWithTuples) {
    console.log(`${tuple[0]}: ${tuple[1]}`);
  }
}

solveCurTask('{"name": "George", "age": 40, "town": "Sofia"}');