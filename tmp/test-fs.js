const fs = require('fs');
const path = require('path');

// console.log(module);
// console.log(__dirname);
// console.log(fs.readdirSync(__dirname));

console.log(fs.readdirSync(__dirname + '/../models/'));

console.log(path.join(__dirname + '/../models/', 'test.js'));
