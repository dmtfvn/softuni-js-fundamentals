function solveCurTask(arr) {
  const newArr = [];

  let arrSum = 0;
  let newArrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];

    arrSum += curNum;

    if (curNum % 2 === 0) {
      curNum += i;
    } else {
      curNum -= i;
    }

    newArr.push(curNum);
  }

  for (let i = 0; i < newArr.length; i++) {
    let curNum = newArr[i];

    newArrSum += curNum;
  }

  console.log(newArr);
  console.log(arrSum);
  console.log(newArrSum);
}

solveCurTask([5, 15, 23, 56, 35]);