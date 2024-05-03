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


function getCoupeNumber(number = 1) {
  if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (!(number) || number > 36) {
    return 'Таких мест в вагоне не существует';
  }

  return Math.ceil((number / 4))
}


console.log(getCoupeNumber(37));