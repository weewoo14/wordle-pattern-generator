import { useEffect, useState } from "react";
import { findWords } from "./findpattern.js"
import { wordlePattern } from "./global.js";
import { useGlobalContext } from "./GlobalState.jsx";
import ModalWindow from "./Modal.jsx";

function SubmitButton() {
  const [wordList, setWordList] = useState('');
  const [noWordleWord, setNoWordleWord] = useState(false);
  const [noFoundPossibleWords, setNoFoundPossibleWords] = useState(false);

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
    var possibleWordsList = findWords(wordList, wordleWord, wordlePattern);
    setPossibleWords( possibleWordsList );
    setSubmitButtonPress(true);

    if (wordleWord.length === 0) {
      setNoWordleWordEntered(true);
    } else if (possibleWordsList.length != 6) {
      setNoFoundPossibleWords(true);
    };
  };

  return (
    <div>
      <div className = "SubmitButton">
        <button className="SubmitButtonBackground" onClick = {() => submitButtonPressed()}>
          <h2 className = "SubmitButtonText"> Submit </h2>
        </button>
      </div>

      <ModalWindow modalWindowOpen={noFoundPossibleWords} modalWindowClose={() => {setNoFoundPossibleWords(false)}}>
        <h1> No Possibilities </h1>
      </ModalWindow>
    </div>
  );

};

export default SubmitButton