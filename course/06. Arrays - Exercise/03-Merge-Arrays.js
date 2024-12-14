function solveCurTask(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    const elem1 = arr1[i];
    const elem2 = arr2[i];

    let unite = '';

    if (i % 2 === 0) {
      unite += Number(elem1) + Number(elem2);
    } else {
      unite += elem1 + elem2;
    }

    newArr.push(unite);
  }

  console.log(newArr.join(' - '));
}

solveCurTask(
  ['5', '15', '23', '56', '35'],
  ['17', '22', '87', '36', '11']
);