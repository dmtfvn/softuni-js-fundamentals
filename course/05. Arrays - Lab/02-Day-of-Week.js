function solveCurTask(dayNum) {
  const weeklyDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  const day = weeklyDays[dayNum - 1];

  if (day !== undefined) {
    console.log(day);
  } else {
    console.log('Invalid day!');
  }
}

solveCurTask(7);