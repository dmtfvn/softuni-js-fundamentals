function solveCurTask(arr) {
  for (const data of arr) {
    const curData = data.split(' | ');

    const town = curData.shift();
    const [latitude, longitude] = curData.map(Number);

    const cityData = {
      town,
      latitude: latitude.toFixed(2),
      longitude: longitude.toFixed(2)
    };

    console.log(cityData);
  }
}

solveCurTask(['Sofia | 42.696552 | 23.32601',
  'Beijing | 39.913818 | 116.363625']);