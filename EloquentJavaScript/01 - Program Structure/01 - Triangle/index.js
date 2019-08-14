const heightOfTriangle = 7;
const characterToUse = '#';

let currentLevel = characterToUse;

for (let currentHeight = 0; currentHeight < heightOfTriangle; currentHeight++){
     console.log(currentLevel + '\n');
     currentLevel = currentLevel + characterToUse;
}
