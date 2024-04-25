'use strict';



function func() {
  return [2025, 12, 31];
}

const [year, month, day] = func()

function func() {
  return ['John', 'Smit', 'development', 'programmer', 2000];
}

// const [name, surname, department, position, salary] = func()

// console.log(name.toUpperCase());


let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 

const [, , department, position] = arr

console.log(position, department);