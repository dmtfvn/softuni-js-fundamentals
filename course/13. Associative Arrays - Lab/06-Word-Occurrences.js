function solveCurTask(arr) {
  const words = new Map();

  let count = 1;

  for (const word of arr) {
    if (!words.has(word)) {
      words.set(word, count);
    } else {
      const curCount = words.get(word);
      const finalCount = curCount + count;

      words.set(word, finalCount);
    }
  }

  const sortByCount = Array.from(words).sort((a, b) => b[1] - a[1]);

  for (const [word, count] of sortByCount) {
    console.log(`${word} -> ${count} times`);
  }
}

solveCurTask(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);