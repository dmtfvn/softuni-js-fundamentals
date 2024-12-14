function solveCurTask(arr) {
  const carsTotalCount = Number(arr.shift());

  const collection = {};

  for (let i = 0; i < carsTotalCount; i++) {
    const tokens = arr.shift().split('|');

    const [car, mileage, fuel] = tokens;

    collection[car] = {mileage: Number(mileage), fuel: Number(fuel)};
  }

  let curCommand = arr.shift();

  while (curCommand !== 'Stop') {
    const tokens = curCommand.split(' : ');

    const [action, car] = tokens;

    if (action === 'Drive') {
      const [, , distance, fuel] = tokens;

      if (collection[car].fuel < Number(fuel)) {
        console.log(`Not enough fuel to make that ride`);
      } else {
        collection[car].mileage += Number(distance);
        collection[car].fuel -= Number(fuel);

        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
      }

      if (collection[car].mileage >= 100000) {
        console.log(`Time to sell the ${car}!`);

        delete collection[car];
      }
    } else if (action === 'Refuel') {
      let refill = Number(tokens[2]);

      if (collection[car].fuel + refill > 75) {
        refill = 75 - collection[car].fuel;
      }

      collection[car].fuel += refill;

      console.log(`${car} refueled with ${refill} liters`);
    } else if (action === 'Revert') {
      const kmReverted = Number(tokens[2]);

      collection[car].mileage -= kmReverted;

      if (collection[car].mileage < 10000) {
        collection[car].mileage = 10000;
      } else {
        console.log(`${car} mileage decreased by ${kmReverted} kilometers`);
      }
    }

    curCommand = arr.shift();
  }

  for (const car in collection) {
    const mileage = collection[car].mileage;
    const fuel = collection[car].fuel;

    console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`)
  }
}

solveCurTask([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'
]);