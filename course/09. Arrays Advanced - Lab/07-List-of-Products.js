function solveCurTask(arr) {
  const listItems = arr.sort();

  for (let i = 0; i < listItems.length; i++) {
    const curElem = listItems[i];

    console.log(`${i + 1}.${curElem}`);
  }
}

solveCurTask(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);