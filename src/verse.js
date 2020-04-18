
const fs = require('mz/fs');
var text;

fs.readFile('text/genesis.txt').then(contents => text = contents)
  .catch(err => console.error(err));

console.log(text);