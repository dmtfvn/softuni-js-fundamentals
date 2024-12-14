function solveCurTask(pageCount, pagePerHour, dayCount) {
  const totalReadTime = pageCount / pagePerHour;
  const reqHours = totalReadTime / dayCount;

  console.log(reqHours);
}

solveCurTask(212, 20, 2);