const dmosh = require('datamosher');
const file = new dmosh('output.mp4');
let val = 1; // 0
let freq = 0; // 0
let repeat = 1; // 1
let start = 0; // 0
let end = 100; // 100
let left = 10; // 10
let right = 90; // 90


file.glitchMP4();
file.generate();

console.log(file.rawData);
