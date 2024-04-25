'use strict';



let options = {
  width: 400,
  height: 500,
  color: 'green'
};

const { color: c = 'black', width, height } = options;

console.log(c);