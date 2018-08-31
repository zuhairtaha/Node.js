console.time("time");

const {readFile} = require('fs');
const {promisify} = require('util');
const helper = require('./libs/helper');

const read = promisify(readFile);
let fullText = "";
const filesPromises = [];
helper.getDirectoryFiles('big4/').forEach(file => {
    filesPromises.push(read(file, 'utf-8'))
});

Promise.all(filesPromises)
    .then((filesContents) => {
        filesContents.forEach(fileContent => fullText += fileContent);
        //const wordsArray = helper.wordsArray(fullText);
        //console.log(helper.wordsFrequency(wordsArray));
        console.timeEnd("time");
    });