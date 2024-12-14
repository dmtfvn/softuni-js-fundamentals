function solveCurTask(centuries) {
  const years = centuries * 100;
  const days = Math.trunc(years * 365.2422);
  const hours = days * 24;
  const mins = hours * 60;

  console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`);
}

solveCurTask(1);