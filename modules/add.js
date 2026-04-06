// function add(a, b) {
//   return a + b;
// }

// // console.log(add(2, 3)); // Output: 5

// module.exports = add;

function add(a, b) {
  return a + b;
}

function addTen(num) {
  return add(num, 10);
}

export { addTen, add };
