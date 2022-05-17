// const fs = require('fs');
// fs.copyFileSync("file.txt", "file2.txt");

var superheroes = require('superheroes');
var supervillain = require('supervillains');

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillain.random();

console.log(mySuperheroName);
console.log(mySupervillainName);
