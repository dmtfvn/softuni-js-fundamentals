function solveCurTask(text) {
  const pattern = /(^|(?<=\s))([a-z0-9]+)([_\.\-]?)([a-z0-9]*)(@)([a-z]+)(-?)([a-z]*)(\.)([a-z]+)(\.?)([a-z]*)(\b|(?=\.))/g;

  const validEmails = [];

  let token = pattern.exec(text);

  while (token !== null) {
    const curEmail = token[0];

    validEmails.push(curEmail);

    token = pattern.exec(text);
  }

  validEmails.forEach(email => console.log(email));
}

solveCurTask('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');