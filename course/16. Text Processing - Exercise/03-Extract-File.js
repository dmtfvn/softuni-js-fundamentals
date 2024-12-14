function solveCurTask(str) {
  const arr = str.split('\\');

  const fileNameExtension = arr.pop();

  const lastDot = fileNameExtension.lastIndexOf('.');

  const fileName = fileNameExtension.substring(0, lastDot);
  const fileExtension = fileNameExtension.substring(lastDot + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}

solveCurTask('C:\\Internal\\training-internal\\Template.pptx');