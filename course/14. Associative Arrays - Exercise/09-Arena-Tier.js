function solveCurTask(arr) {
  const gladiatorsList = {};

  let curData = arr.shift();

  while (curData !== 'Ave Cesar') {
    if (curData.includes(' vs ')) {
      const gladiatorsPair = curData.split(' vs ');

      const [firstGlad, secondGlad] = gladiatorsPair;

      if (firstGlad in gladiatorsList && secondGlad in gladiatorsList) {
        const sameTechCheck = gladiatorsList[firstGlad].filter(el => {
          return gladiatorsList[secondGlad].includes(el);
        });

        if (sameTechCheck.length > 0) {
          let firstGladTotalSkills = 0;
          let secondGladTotalSkills = 0;

          for (let i = 1; i < gladiatorsList[firstGlad].length; i += 2) {
            const curSkill = gladiatorsList[firstGlad][i];

            firstGladTotalSkills += curSkill;
          }

          for (let i = 1; i < gladiatorsList[secondGlad].length; i += 2) {
            const curSkill = gladiatorsList[secondGlad][i];

            secondGladTotalSkills += curSkill;
          }

          if (firstGladTotalSkills > secondGladTotalSkills) {
            delete gladiatorsList[secondGlad];
          }

          if (secondGladTotalSkills > firstGladTotalSkills) {
            delete gladiatorsList[firstGlad];
          }
        } else {
          curData = arr.shift();

          continue;
        }
      } else {
        curData = arr.shift();

        continue;
      }
    } else {
      const curEl = curData.split(' -> ');

      const gladiator = curEl.shift();
      const technique = curEl.shift();
      const skill = Number(curEl.shift());
  
      if (gladiator in gladiatorsList) {
        if (!gladiatorsList[gladiator].includes(technique)) {
          gladiatorsList[gladiator].push(technique, skill);
        } else {
          const techSkill = gladiatorsList[gladiator].indexOf(technique) + 1;
  
          if (gladiatorsList[gladiator][techSkill] < skill) {
            gladiatorsList[gladiator][techSkill] = skill;
          }
        }
      } else {
        gladiatorsList[gladiator] = [technique, skill];
      }
  
      curData = arr.shift();
    }
  }

  const newArr = Object.entries(gladiatorsList);

  const firstTemp = [];

  for (const curGlad of newArr) {
    const [gladName, totalSkills] = curGlad;

    let totalSkillsSum = 0;

    for (let i = 1; i < totalSkills.length; i += 2) {
      const curSkill = totalSkills[i];

      totalSkillsSum += curSkill;
    }

    firstTemp.push([gladName, totalSkillsSum]);
  }

  firstTemp.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  for (const curGladiator of firstTemp) {
    const [name, skill] = curGladiator;

    const secondTemp = [];

    console.log(`${name}: ${skill} skill`);

    for (let i = 0; i < gladiatorsList[name].length; i += 2) {
      const curTech = gladiatorsList[name][i];
      const curSkill = gladiatorsList[name][i + 1];

      secondTemp.push([curTech, curSkill]);
    }

    secondTemp.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (const tokens of secondTemp) {
      const [techName, skillValue] = tokens;

      console.log(`- ${techName} <!> ${skillValue}`);
    }
  }
}

solveCurTask([
  'Peter -> BattleCry -> 400',
  'Alex -> PowerPunch -> 300',
  'Stefan -> Duck -> 200',
  'Stefan -> Tiger -> 250',
  'Ave Cesar'
  ]);