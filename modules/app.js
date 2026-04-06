// const add = require('./add');
// const subtract = require('./subtract');

// const x = add(10, 5);
// console.log('add', x); // Output: 15
// const y = subtract(10, 5);
// console.log('subtract', y); // Output: 5

import { add, addTen } from './add.js';
import Nifemi, { subtractTen as Tomiwa } from './subtract.js';

const x = add(10, 5);
console.log('add', x); // Output: 15
const y = Nifemi(10, 5);
console.log('subtract', y); // Output: 5

const z = addTen(15);
console.log('addTen', z); // Output: 15

const w = Tomiwa(20);
console.log('subtractTen', w); // Output: 10
