function solveCurTask(arr) {
  const pianoCollection = {};

  const piecesCount = Number(arr.shift());

  for (let i = 0; i < piecesCount; i++) {
    const curPiece = arr.shift().split('|');

    const [piece, composer, key] = curPiece;

    pianoCollection[piece] = {composer: composer, key: key};
  }

  let curCommand = arr.shift();

  while (curCommand !== 'Stop') {
    const tokens = curCommand.split('|');

    const command = tokens.shift();

    const piece = tokens.shift();

    if (command === 'Add') {
      if (piece in pianoCollection) {
        console.log(`${piece} is already in the collection!`);
      } else {
        const composer = tokens.shift();
        const key = tokens.shift();

        pianoCollection[piece] = {composer: composer, key: key};

        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
      }
    } else if (command === 'Remove') {
      if (piece in pianoCollection) {
        console.log(`Successfully removed ${piece}!`);

        delete pianoCollection[piece];
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    } else if (command === 'ChangeKey') {
      if (piece in pianoCollection) {
        const newKey = tokens.shift();

        console.log(`Changed the key of ${piece} to ${newKey}!`);

        pianoCollection[piece].key = newKey;
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    }

    curCommand = arr.shift();
  }

  for (const curPiece in pianoCollection) {
    const composer = pianoCollection[curPiece].composer;
    const key = pianoCollection[curPiece].key;

    console.log(`${curPiece} -> Composer: ${composer}, Key: ${key}`);
  }
}

solveCurTask([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]);