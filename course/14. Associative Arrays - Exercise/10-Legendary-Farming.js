function solveCurTask(str) {
  const legendaryMaterialItems = {
    shards: 'Shadowmourne',
    fragments: 'Valanyr',
    motes: 'Dragonwrath'
  };

  const keyMaterialQuantities = {
    shards: 0,
    fragments: 0,
    motes: 0
  };

  const junkMaterialQuantities = {};

  const quantityMaterials = str.split(' ');

  for (let i = 0; i < quantityMaterials.length; i += 2) {
    const quantity = Number(quantityMaterials[i]);
    const material = quantityMaterials[i + 1].toLowerCase();

    if (material in keyMaterialQuantities) {
      keyMaterialQuantities[material] += quantity;

      if (keyMaterialQuantities[material] >= 250) {
        keyMaterialQuantities[material] -= 250;

        const legendaryObtained = legendaryMaterialItems[material];

        console.log(`${legendaryObtained} obtained!`);
        break;
      }
    } else {
      if (material in junkMaterialQuantities) {
        junkMaterialQuantities[material] += quantity;
      } else {
        junkMaterialQuantities[material] = quantity;
      }
    }
  }

  const keyMaterials = Object.entries(keyMaterialQuantities);
  keyMaterials.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  for (const [material, count] of keyMaterials) {
    console.log(`${material}: ${count}`);
  }

  const junkMaterials = Object.entries(junkMaterialQuantities);
  junkMaterials.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [material, count] of junkMaterials) {
    console.log(`${material}: ${count}`);
  }
}

solveCurTask('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');