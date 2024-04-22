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

function sortByLength(array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest
  let arr = [...array]
  console.log(arr);

  let min = arr[0].length;

  let some = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (min > arr[i].length) {
      min = arr[i].length;
      some.push(arr[i])
    }
  }

  console.log(some);

  return [];
}


sortByLength(['', 'Moderately', 'Brains', 'Pizza']);