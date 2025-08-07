import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [submitButtonPress, setSubmitButtonPress] = useState(false);
  const [characterPlacement, setCharacterPlacement] = useState({
    "r1c1" : " ",
    "r1c2" : " ",
    "r1c3" : " ",
    "r1c4" : " ",
    "r1c5" : " ",
  
    "r2c1" : " ",
    "r2c2" : " ",
    "r2c3" : " ",
    "r2c4" : " ",
    "r2c5" : " ",
  
    "r3c1" : " ",
    "r3c2" : " ",
    "r3c3" : " ",
    "r3c4" : " ",
    "r3c5" : " ",
  
    "r4c1" : " ",
    "r4c2" : " ",
    "r4c3" : " ",
    "r4c4" : " ",
    "r4c5" : " ",
  
    "r5c1" : " ",
    "r5c2" : " ",
    "r5c3" : " ",
    "r5c4" : " ",
    "r5c5" : " ",
  
    "r6c1" : " ",
    "r6c2" : " ",
    "r6c3" : " ",
    "r6c4" : " ",
    "r6c5" : " "
      
  });

  const [resetButtonPress, setResetButtonPress] = useState(false);
  const [wordleWord, setWordleWord] = useState("");
  const [possibleWords, setPossibleWords] = useState('');

  return (
    <GlobalContext.Provider value = {{
        submitButtonPress,
        setSubmitButtonPress,

        resetButtonPress,
        setResetButtonPress,

        wordleWord,
        setWordleWord,

        possibleWords,
        setPossibleWords,

        characterPlacement,
        setCharacterPlacement

        }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);

export {GlobalProvider, useGlobalContext};