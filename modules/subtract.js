// function subtract(a, b) {
//   return a - b;
// }

// // console.log(subtract(5, 2)); // Output: 3

// module.exports = subtract;

// export function subtract(a, b) {
//   return a - b;
// }

function subtract(a, b) {
  return a - b;
}

function subtractTen(num) {
  return subtract(num, 10);
}

export default subtract;

export { subtractTen };
