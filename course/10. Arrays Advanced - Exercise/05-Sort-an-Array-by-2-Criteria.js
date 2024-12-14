function solveCurTask(arr) {
  const sortStr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  console.log(sortStr.join('\n'));
}

solveCurTask(['alpha', 'beta', 'gamma']);