function solveCurTask(arr) {
  const heroesList = {};

  const heroesCount = Number(arr.shift());

  for (let i = 0; i < heroesCount; i++) {
    const curHero = arr.shift().split(' ');

    const [name, hp, mp] = curHero;

    heroesList[name] = {hp: Number(hp), mp: Number(mp)};
  }

  let curCommand = arr.shift();

  while (curCommand !== 'End') {
    const tokens = curCommand.split(' - ');

    const action = tokens.shift();
    const heroName = tokens.shift();

    if (action === 'Heal') {
      const curHp = heroesList[heroName].hp;

      let healAmount = Number(tokens.shift());

      if (curHp + healAmount > 100) {
        healAmount = 100 - curHp;
      }

      heroesList[heroName].hp += healAmount;

      console.log(`${heroName} healed for ${healAmount} HP!`);
    } else if (action === 'Recharge') {
      const curMp = heroesList[heroName].mp;

      let rechargeAmount = Number(tokens.shift());

      if (curMp + rechargeAmount > 200) {
        rechargeAmount = 200 - curMp;
      }

      heroesList[heroName].mp += rechargeAmount;

      console.log(`${heroName} recharged for ${rechargeAmount} MP!`);
    } else if (action === 'TakeDamage') {
      let curHp = heroesList[heroName].hp;

      const dmgTaken = Number(tokens.shift());
      const attacker = tokens.shift();

      curHp = heroesList[heroName].hp -= dmgTaken;

      if (curHp > 0) {
        console.log(`${heroName} was hit for ${dmgTaken} HP by ${attacker} and now has ${curHp} HP left!`);
      } else {
        console.log(`${heroName} has been killed by ${attacker}!`);

        delete heroesList[heroName];
      }
    } else if (action === 'CastSpell') {
      let curMp = heroesList[heroName].mp;

      const manaNeeded = Number(tokens.shift());
      const spellName = tokens.shift();

      if (curMp >= manaNeeded) {
        curMp -= manaNeeded;

        console.log(`${heroName} has successfully cast ${spellName} and now has ${curMp} MP!`);
      } else {
        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
      }

      heroesList[heroName].mp = curMp;
    }

    curCommand = arr.shift();
  }

  for (const heroInfo in heroesList) {
    console.log(heroInfo);

    console.log(`  HP: ${heroesList[heroInfo].hp}`);
    console.log(`  MP: ${heroesList[heroInfo].mp}`);
  }
}

solveCurTask([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End"
  ]);