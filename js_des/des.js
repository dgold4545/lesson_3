'use strict';



let obj = {
  year: 2025,
  month: 12,
  day: 31,
};


const { year: y, month: m, day: d } = obj;
console.log(y,d,m);
let options = {
  color: 'red',
  width: 400,
  height: 500,
};


const { color: c, width: w, height: h } = options;


console.log(c,h,w);