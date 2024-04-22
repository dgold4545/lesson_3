// Модуль 2. Заняття 3. Масиви

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

const values = '8 11';

let param = values.split(' ');
console.log(param);

param[0] = Number(param[0])
param[1] = Number(param[1])


function squ(a, b) {
  return (a + b) * 2;
}

squ(param[0], param[1])

console.log(squ(param[0], param[1]));
