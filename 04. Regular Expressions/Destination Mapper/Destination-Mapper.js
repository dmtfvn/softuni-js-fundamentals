function solveCurTask(str) {
  const patter = /([=\/])[A-Z]{1}[a-zA-Z]{2,}\1/g;

  const travelPoints = [];

  let places = patter.exec(str);

  while (places) {
    const curPlace = places[0].split(places[1]).join('');
    
    travelPoints.push(curPlace);
    
    places = patter.exec(str);
  }

  console.log(`Destinations: ${travelPoints.join(', ')}`);

  console.log(`Travel Points: ${travelPoints.join('').length}`);
}

solveCurTask('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');