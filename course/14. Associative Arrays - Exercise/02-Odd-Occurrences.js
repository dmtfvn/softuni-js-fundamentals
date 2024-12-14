function solveCurTask(str) {
  const occurrences = new Map();

  const arr = str.split(' ').map(el => el.toLowerCase());

  for (const el of arr) {
    if (occurrences.has(el)) {
      const curCount = occurrences.get(el);

      occurrences.set(el, curCount + 1);
    } else {
      occurrences.set(el, 1);
    }
  }

  const arrOfTuples = occurrences.entries();

  const tempArr = [];

  for (const [el, count] of arrOfTuples) {
    if (count % 2 !== 0) {
      tempArr.push(el);
    }
  }

  console.log(tempArr.join(' '));
}

solveCurTask('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');