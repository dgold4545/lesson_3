// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить її в консоль.

const string = 'Welcome to the future';

function reverseString(str) {
  return str.split(' ').reverse().join(' ');
}

reverseString(string);
console.log(reverseString(string));
