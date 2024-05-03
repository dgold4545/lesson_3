'use strict';



function calculateVolumeAndArea(cubeEdge) {

  if (typeof cubeEdge !== 'number' || cubeEdge < 0 || !Number.isInteger(cubeEdge)) {
    return 'При вычислении произошла ошибка';
  }

  const cubeVolume = Math.pow(cubeEdge, 3);

  const cubeArea = 6 * Math.pow(cubeEdge,2);

  return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
}

console.log(calculateVolumeAndArea(5));


