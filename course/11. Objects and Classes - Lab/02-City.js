function solveCurTask(city) {
  const keys = Object.keys(city);

  for (const key of keys) {
    const value = city[key];

    console.log(`${key} -> ${value}`);
  }
}

solveCurTask({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000"
});