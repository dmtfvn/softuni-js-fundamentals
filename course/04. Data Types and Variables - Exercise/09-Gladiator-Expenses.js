function solveCurTask(lossesCount, helm, sword, shield, armor) {
  let helmCost = 0;
  let swordCost = 0;
  let shieldCost = 0;
  let armorCost = 0;

  let brokenShieldCount = 0;

  for (let curFight = 1; curFight <= lossesCount; curFight++) {
    if (curFight % 2 === 0) {
      helmCost += helm;
    }

    if (curFight % 3 === 0) {
      swordCost += sword;
    }

    if (curFight % 2 === 0 && curFight % 3 === 0) {
      shieldCost += shield;

      brokenShieldCount++;

      if (brokenShieldCount % 2 === 0) {
        armorCost += armor;
      }
    }
  }

  let totalCost = helmCost + swordCost + shieldCost + armorCost;

  console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

solveCurTask(7, 2, 3, 4, 5);