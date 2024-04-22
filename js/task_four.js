// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

const names = 'Jacob, William, Solomon, Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
const namesArr = names.split(', ');
const phonesArr = phones.split(',')
console.log(phonesArr);
console.log(namesArr);
let res = []

for (let i = 0; i < namesArr.length; i += 1) {
  res.push(`${namesArr[i]} : ${phonesArr[i]}`)
}

console.log(res);