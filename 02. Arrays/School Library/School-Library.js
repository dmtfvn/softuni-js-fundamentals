function solveCurTask(arr) {
  let shelfWithBooks = arr.shift().split('&');

  let i = 0;
  let command = arr[i];

  while (command !== 'Done') {
    const curElems = command.split(' | ');

    const curCmd = curElems.shift();

    const curBook = curElems[0];

    if (curCmd === 'Add Book') {
      if (!shelfWithBooks.includes(curBook)) {
        shelfWithBooks.unshift(curBook);
      }
    } else if (curCmd === 'Take Book') {
      if (shelfWithBooks.includes(curBook)) {
        const bookIdx = shelfWithBooks.indexOf(curBook);

        shelfWithBooks.splice(bookIdx, 1);
      }
    } else if (curCmd === 'Swap Books') {
      const secondBook = curElems[1];

      if (shelfWithBooks.includes(curBook) && shelfWithBooks.includes(secondBook)) {
        const bookOneIdx = shelfWithBooks.indexOf(curBook);
        const bookTwoIdx = shelfWithBooks.indexOf(secondBook);

        const temp = shelfWithBooks[bookOneIdx];

        shelfWithBooks[bookOneIdx] = shelfWithBooks[bookTwoIdx];
        shelfWithBooks[bookTwoIdx] = temp;

      }
    } else if (curCmd === 'Insert Book') {
      if (!shelfWithBooks.includes(curBook)) {
        shelfWithBooks.push(curBook);
      }
    } else if (curCmd === 'Check Book') {
      const bookIdx = Number(curBook);

      if (bookIdx >= 0 && bookIdx < shelfWithBooks.length) {
        console.log(shelfWithBooks[bookIdx]);
      }
    }

    i++;
    command = arr[i];
  }

  console.log(shelfWithBooks.join(', '));
}

solveCurTask(["War and Peace&Hamlet&Ulysses&Madame Bovary",
  "Check Book | 2",
  "Swap Books | Don Quixote | Ulysses",
  "Done"]);