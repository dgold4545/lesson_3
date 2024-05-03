'use strict';

function calculateVolumeAndArea(cubeEdge) {
  if (
    typeof cubeEdge !== 'number' ||
    cubeEdge < 0 ||
    !Number.isInteger(cubeEdge)
  ) {
    return 'При вычислении произошла ошибка';
  }

  const cubeVolume = Math.pow(cubeEdge, 3);

  const cubeArea = 6 * Math.pow(cubeEdge, 2);

  return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(number = 1) {
  if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (!number || number > 36) {
    return 'Таких мест в вагоне не существует';
  }

  return Math.ceil(number / 4);
}

console.log(getCoupeNumber(37));

/**
 * принимает в себя целое число минут и возвращае время в нужном формате строки
 * @param {Number} minutes
 * @return {String}
 */
function getTimeFromMinutes(minutes) {
  if (
    typeof minutes !== 'number' ||
    minutes < 0 ||
    !Number.isInteger(minutes)
  ) {
    return 'Ошибка, проверьте данные';
  }

  let getHourst = minutes === 1 ? 1 : Math.floor(minutes / 60);
  let getMinutes = minutes < 60 ? minutes : minutes % 60;

  console.log(getHourst);
  console.log(getMinutes);
  if ((getHourst > 4 && getHourst < 11) || !getHourst) {
    return `Это ${getHourst} часов и ${getMinutes} минут`;
  } else if (getHourst === 1) {
    return `Это ${getHourst} час и 0 минут`;
  }
  
    
    return `Это ${getHourst} часа и ${getMinutes} минут`;
}

console.log(getTimeFromMinutes(60));
