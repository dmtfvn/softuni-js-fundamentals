function solveCurTask(arr) {
  const schedule = {};

  for (const data of arr) {
    const [weekDay, name] = data.split(' ');

    if (schedule.hasOwnProperty(weekDay)) {
      console.log(`Conflict on ${weekDay}!`);
    } else {
      schedule[weekDay] = name;

      console.log(`Scheduled for ${weekDay}`);
    }
  }

  for (const reservation in schedule) {
    console.log(`${reservation} -> ${schedule[reservation]}`);
  }
}

solveCurTask(['Monday Peter',
  'Wednesday Bill',
  'Monday Tim',
  'Friday Tim']);