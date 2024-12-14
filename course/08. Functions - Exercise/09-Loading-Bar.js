function solveCurTask(num) {
  function loadingBar(symbol) {
    const percentSymbolCount = symbol / 10;
    const dotsSymbolCount = 10 - percentSymbolCount;

    const percents = '%'.repeat(percentSymbolCount);
    const dots = '.'.repeat(dotsSymbolCount);

    const bar = `[${percents}${dots}]`;

    return bar;
  }

  const fullBar = loadingBar(num);

  if (num === 100) {
    console.log('100% Complete!');
  } else {
    console.log(`${num}% ${fullBar}`);
    console.log('Still loading...');
  }
}

solveCurTask(30);