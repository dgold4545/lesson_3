// Example 5 - Масиви та рядки
// Напиши скрипт який виводить у консоль усі слова рядка окрім першого та останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

const string = 'Welcome to the future';

const stringToArray = string.split(' ');


const normalString = stringToArray.slice(1, -1)

console.log(normalString);

const result = normalString.join(' ')
console.log(result);