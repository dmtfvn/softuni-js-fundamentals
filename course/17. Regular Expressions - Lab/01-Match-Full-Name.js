function solveCurTask(names) {
  const regEx = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/g;

  const validNames = names.match(regEx);

  console.log(validNames.join(' '));
}

solveCurTask("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov"
);