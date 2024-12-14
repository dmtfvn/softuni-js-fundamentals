function solveCurTask(arr) {
  const pattern = /([#|])([a-z]+\s?[a-z]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/gi;

  let totalCalories = 0;
  const totalFood = [];

  let tokens = pattern.exec(arr[0]);

  while (tokens !== null) {
    const [, , name, expDate, cals] = tokens;

    const calories = Number(cals);
    totalCalories += calories;

    const foodInfo = `Item: ${name}, Best before: ${expDate}, Nutrition: ${cals}`;
    totalFood.push(foodInfo);

    tokens = pattern.exec(arr[0]);
  }

  const totalDays = totalCalories / 2000;

  console.log(`You have food to last you for: ${Math.floor(totalDays)} days!`);

  totalFood.forEach(item => console.log(item));
}

solveCurTask([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
  ]);