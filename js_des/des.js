'use strict';



function calculateVolumeAndArea(cubeEdge) {

  const cubeVolume = Math.pow(cubeEdge, 3);

  const cubeArea = 6 * Math.pow(cubeEdge,2);

  return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
}

console.log(calculateVolumeAndArea(5));