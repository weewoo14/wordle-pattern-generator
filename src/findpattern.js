"use strict";

function equalTwoArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }

  return true;
}

function createFreqObj( str ) {
  const startUnicodeValue = 97;
  let counter = new Object();
  for (let i = 0; i < 26; i++) {
    counter[ String.fromCharCode( startUnicodeValue + i) ] = 0;
  }

  for (let letter of str) {
    counter[ letter ] += 1;
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
  console.log( possibleWords );
  return possibleWords;

}