function solveCurTask(firstName, lastName, age) {
  const person = {};

  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;

  return person;
}

console.log(solveCurTask("Peter", "Pan", 20));