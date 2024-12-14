function solveCurTask(arr) {
  const students = new Map();

  for (const data of arr) {
    const tokens = data.split(' ');

    const name = tokens.shift();
    const grades = tokens.map(Number);

    if (!students.has(name)) {
      students.set(name, grades);
    } else {
      const curGrades = students.get(name);

      for (const grade of grades) {
        curGrades.push(grade);
      }
    }
  }

  const newArr = [...students];
  const sortByName = newArr.sort(([a], [b]) => a.localeCompare(b));

  for (const [name, grade] of sortByName) {
    const avgGrade = grade.reduce((accum, curValue) => accum + curValue) / grade.length;

    console.log(`${name}: ${avgGrade.toFixed(2)}`);
  }
}

solveCurTask(['Lilly 4 6 6 5',
  'Tim 5 6',
  'Tammy 2 4 3',
  'Tim 6 6']);