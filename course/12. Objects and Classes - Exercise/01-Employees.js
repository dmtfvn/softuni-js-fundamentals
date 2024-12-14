function solveCurTask(arr) {
  const employeesList = [];

  for (const name of arr) {
    const number = name.length;

    const person = {
      name,
      number
    };

    employeesList.push(person);
  }

  for (const employee of employeesList) {
    console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
  }
}

solveCurTask([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
  ]);