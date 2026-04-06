// Windows → C:\project\public\index.html

// Mac/Linux → /project/public/index.html

const path = require('path');

const filePath = path.join('project', 'public', 'index.html');
console.log(filePath); // Output: project/public/index.
