console.time("time (synchronous)");
const {readFileSync} = require('fs');
const helper = require('./libs/helper');

let fullText = "";
helper.getDirectoryFiles('myFiles/').forEach(file => {
    fullText += readFileSync(file, 'utf-8');
});
console.log(helper.wordsFrequency(fullText));
console.timeEnd("time (synchronous)");
/*
 [ { word: 'your', frequency: 45937 },
 { word: 'future', frequency: 45920 },
 { word: 'hack', frequency: 45918 },
 { word: 'the', frequency: 179 },
 { word: 'and', frequency: 99 },
 { word: 'of', frequency: 81 },
 { word: 'to', frequency: 80 },
 { word: 'a', frequency: 55 },
 { word: 'in', frequency: 52 },
 { word: 'is', frequency: 33 },
 { word: 'was', frequency: 31 },
 { word: 'are', frequency: 28 },
 { word: 'on', frequency: 25 },
 { word: 'you', frequency: 25 },
 { word: 'for', frequency: 24 } ]

 time (synchronous): 3970.120ms
 */