// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів має починатися з 1.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`${i + 1}): ${fruits[i]}`);
}