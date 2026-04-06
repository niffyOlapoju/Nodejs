import fs from 'fs';

fs.readFile('./modules/data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

fs.writeFile('./modules/data.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
});
