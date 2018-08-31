console.time("time");
const {readFileSync} = require('fs');
const helper = require('./libs/helper');

let fullText = "";
helper.getDirectoryFiles('big4/').forEach(file => {
    fullText += readFileSync(file, 'utf-8');
});
//const wordsArray = helper.wordsArray(fullText);
//console.log(helper.wordsFrequency(wordsArray));
console.timeEnd("time");