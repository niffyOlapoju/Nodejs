const fs = require('fs');
const path = require('path');

const wrongPath = path.join('modules', 'data.txt');
const filePath = path.join(__dirname, 'data.txt');

console.log(`Wrong path: ${wrongPath}`);
console.log(`File path: ${filePath}`);

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

fs.writeFile(filePath, 'Hello, World!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
});
