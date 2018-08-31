/**
 * return files paths at a directory
 * @param directory
 * @returns {Array}
 */
const getDirectoryFiles = directory => {
    const {readdirSync} = require('fs');
    const filesNames = readdirSync(directory);
    return filesNames.map(file => directory + file);
};

// --------------------------
/**
 * convert text of all files to array of words
 * @param {String}text
 * @returns {Array}
 */
function getWordsArray(text) {
    // string to array
    const wordsArray = text.split(" ");
    // remove numbers
    wordsArray.map(word => word.match(/\D+/g));
    // ignore case (example: the=The...)
    return wordsArray.map(word => word.toLowerCase());
}

// --------------------------
/**
 * get unique words of an array, and frequency of each word at the array
 * @param {String} text
 */
const wordsFrequency = text => {
    const wordsArray = getWordsArray(text);
    return [...new Set(wordsArray)] // only unique items
    // replace each word in the array with object of word and its frequency
        .map(word => ({word: word, frequency: wordFrequencyInArray(word, wordsArray)}))
        .sort((a, b) => b.frequency - a.frequency) // ascending order by frequency
        .slice(0, 15) // limit: return first 15 items (remove this line to return all items)
};

// --------------------------
/**
 * get frequency of a word in an array
 * @param {String} word
 * @param {Array} wordsArray
 */
const wordFrequencyInArray = (word, wordsArray) => {
    return wordsArray.reduce((count, currentWord) => {
        if (currentWord === word) count++;
        return count;
    }, 0);
};

// --------------------------
module.exports = {
    wordsFrequency,
    getDirectoryFiles
};