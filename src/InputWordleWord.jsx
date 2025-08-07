import { useState } from "react";
import { useGlobalContext } from "./GlobalState";

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',' q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function checkWord(word) {
  if (word === null || word.length != 5) {
    console.log("HERE");
    return false;
  };
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (alphabet.indexOf(word[i]) == -1) {
      console.log(word[i]);
      return false;
    }
  };
  return true;
}

function InputWordleWord() {
  const { wordleWord, setWordleWord } = useGlobalContext();

  function inputWordPrompt() {
    let tempWordleWord = "";
    let validWord = false;

    while (validWord == false) {
      tempWordleWord = prompt("Enter today's Wordle word.");
      validWord = checkWord(tempWordleWord);
    }

    setWordleWord(tempWordleWord);
  }

  return (
    <div className = "InputButton" onClick={() => inputWordPrompt()}>
      <h2 className = "InputButtonText"> Input: {wordleWord} </h2>
    </div>
  );
}

export default InputWordleWord