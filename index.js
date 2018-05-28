const fs = require('fs');

const text = fs.readFileSync('index.js','UTF-8');
console.log(text);