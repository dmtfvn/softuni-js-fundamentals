function solveCurTask(arr) {
  const dictionary = [];

  class Dictionary {
    constructor(term, definition) {
      this.term = term;
      this.definition = definition;
    }
  }

  for (const curData of arr) {
    const curObj = JSON.parse(curData);

    const term = Object.keys(curObj);
    const definition = Object.values(curObj);

    const instance = new Dictionary(term[0], definition[0]);

    const existingTerm = dictionary.find(obj => obj.term === term[0]);

    if (existingTerm) {
      existingTerm.definition = definition[0];
      
      continue;
    }

    dictionary.push(instance);
  }

  dictionary.sort((a, b) => a.term.localeCompare(b.term));

  for (const obj of dictionary) {
    console.log(`Term: ${obj.term} => Definition: ${obj.definition}`);
  }
}

solveCurTask([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
  ]);