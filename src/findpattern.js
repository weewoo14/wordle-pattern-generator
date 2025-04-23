"use strict";

function equalTwoArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }

  return true;
}

function createFreqObj(str) {
  let counter = {
    "a" : 0,
    "b" : 0,
    "c" : 0,
    "d" : 0,
    "e" : 0,
    "f" : 0,
    "g" : 0,
    "h" : 0,
    "i" : 0,
    "j" : 0,
    "k" : 0,
    "l" : 0,
    "m" : 0,
    "n" : 0,
    "o" : 0,
    "p" : 0,
    "q" : 0,
    "r" : 0,
    "s" : 0,
    "t" : 0,
    "u" : 0,
    "v" : 0,
    "w" : 0,
    "x" : 0,
    "y" : 0,
    "z" : 0 
  };
  for (let letter of str) {
    counter[letter] += 1;
  };

  return counter;
}

export function findWords(wordList, wordleWord, wordlePattern) {
  let possibleWords = [];

  for (let curPatternRow = 0; curPatternRow < 6; curPatternRow++) {

    let foundPossibleWord = false;
    for (let word of wordList) {

      let curWordRow = [-1, -1, -1, -1, -1];
      let freqWord = createFreqObj(wordleWord);

      // GREEN TILES
      for (let i = 0; i < word.length; i++) {
        if (word[i] == wordleWord[i] && wordlePattern[curPatternRow][i] == 2) {
          freqWord[word[i]] -= 1;
          curWordRow[i] = 2;
        };
      };

      // GRAY TILES
      for (let i = 0; i < word.length; i++) {
        if (wordleWord.indexOf(word[i]) == -1 && wordlePattern[curPatternRow][i] == 0) {
          curWordRow[i] = 0;
        };
      };

      // YELLOW TILES
      for (let i = 0; i < word.length; i++) {
        if (word[i] != wordleWord[i]) {
          if (wordleWord.indexOf(word[i]) != - 1 && freqWord[word[i]] > 0 && wordlePattern[curPatternRow][i] == 1 && curWordRow[i] == -1) {
            freqWord[word[i]] -= 1;
            curWordRow[i] = 1;
          };
        };
      };
      

      let patternEquality = equalTwoArrays(wordlePattern[curPatternRow], curWordRow);
      if (patternEquality == true) {
        foundPossibleWord = true;
        possibleWords.push(word);
        break;
      }
    
    }
    if (foundPossibleWord == false) {
      return possibleWords;
    }
  }
  return possibleWords;

}