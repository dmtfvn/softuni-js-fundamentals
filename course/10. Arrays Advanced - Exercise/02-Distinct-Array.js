function solveCurTask(arr) {
  const unique = [];
  
  for (const num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  console.log(unique.join(' '));
}

solveCurTask([7, 8, 9, 7, 2, 3, 4, 1, 2]);