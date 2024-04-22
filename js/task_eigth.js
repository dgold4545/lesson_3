// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];
console.log(min); // 1


for (let number of numbers) {
  if (min > number) {
    min = number
  }
}

console.log(min);