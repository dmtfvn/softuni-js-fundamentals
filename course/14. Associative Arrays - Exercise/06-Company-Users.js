function solveCurTask(arr) {
  const companyEmployees = {};

  for (const curData of arr) {
    const [company, employeeId] = curData.split(' -> ');

    if (company in companyEmployees) {
      if (!companyEmployees[company].includes(employeeId)) {
        companyEmployees[company].push(employeeId);
      }
    } else {
      companyEmployees[company] = [employeeId];
    }
  }

  const arrOfTuples = Object.entries(companyEmployees);
  arrOfTuples.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, arrWithId] of arrOfTuples) {
    console.log(name);

    for (const id of arrWithId) {
      console.log(`-- ${id}`);
    }
  }
}

solveCurTask([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345'
  ]);