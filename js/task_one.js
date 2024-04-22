// Модуль 2. Заняття 3. Масиви

// Example 1 - Базові операції з масивом

// Створіть масив genres з елементами "Jazz" та "Blues".
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть останній елемент масиву в консоль. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres =

const genres = ['Jazz', 'Blues'];
genres.push('«Рок-н-рол»')
console.log(genres);

console.log(genres[0]);
console.log(genres[genres.length - 1]);
console.log(genres.shift());

console.log(genres.unshift('Country', 'Reggae'));

console.log(genres);