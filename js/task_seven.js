// Example 7 - Сортування масиву з циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемент.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

function sortArr(arr) {
  
  let len = arr.length - 1;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - i; j += 1) {
      if (arr[j][0] > arr[j + 1][0]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
console.log(sortArr(langs));
sortArr(langs)