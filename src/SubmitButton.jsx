import { useEffect, useState } from "react";
import { findWords } from "./findpattern.js"
import { wordlePattern } from "./global.js";
import { useGlobalContext } from "./GlobalState.jsx";

function SubmitButton() {
  const [wordList, setWordList] = useState('');
  const { wordleWord, setSubmitButtonPress, possibleWords, setPossibleWords } = useGlobalContext();

  useEffect(() => {
  
      const wordListFetch = async() => {
  
        try {
          const wordListFetch = await fetch("http://localhost:3001/data");
          const wordListData = await wordListFetch.text();
          const wordListArray = wordListData.split("\n");
          setWordList(wordListArray);
        } catch(err) {
          console.error("Error in SubmitButton.jsx.", err);
        }
      }
  
      wordListFetch();
    }, []);

    function submitButtonPressed() {
      setSubmitButtonPress(true);
      setPossibleWords(findWords(wordList, wordleWord, wordlePattern));

      if (possibleWords.length != 6) {
        alert("No possibilities. Please reset your word and try a new pattern.");
      };
    };

  return (
    <div className = "SubmitButton" onClick = {() => submitButtonPressed()}>
      <h2 className = "SubmitButtonText"> Submit </h2>
    </div>
  );

};

export default SubmitButton