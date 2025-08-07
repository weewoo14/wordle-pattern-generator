import { useEffect, useState } from "react";

import { findWords } from "./findpattern.js";
import { wordlePattern } from "./global";
import { useGlobalContext } from "./GlobalState.jsx";

function PatternTile(props) {
  const { submitButtonPress, setSubmitButtonPress, resetButtonPress, setResetButtonPress, wordleWord, setWordleWord, possibleWords, setPossibleWords, characterPlacement, setCharacterPlacement } = useGlobalContext();

  const [buttonColors, setButtonColors] = useState({
    "r1c1" : "#3a393c",
    "r1c2" : "#3a393c",
    "r1c3" : "#3a393c",
    "r1c4" : "#3a393c",
    "r1c5" : "#3a393c",
  
    "r2c1" : "#3a393c",
    "r2c2" : "#3a393c",
    "r2c3" : "#3a393c",
    "r2c4" : "#3a393c",
    "r2c5" : "#3a393c",
  
    "r3c1" : "#3a393c",
    "r3c2" : "#3a393c",
    "r3c3" : "#3a393c",
    "r3c4" : "#3a393c",
    "r3c5" : "#3a393c",
  
    "r4c1" : "#3a393c",
    "r4c2" : "#3a393c",
    "r4c3" : "#3a393c",
    "r4c4" : "#3a393c",
    "r4c5" : "#3a393c",
  
    "r5c1" : "#3a393c",
    "r5c2" : "#3a393c",
    "r5c3" : "#3a393c",
    "r5c4" : "#3a393c",
    "r5c5" : "#3a393c",
  
    "r6c1" : "#3a393c",
    "r6c2" : "#3a393c",
    "r6c3" : "#3a393c",
    "r6c4" : "#3a393c",
    "r6c5" : "#3a393c"
    
  });

  const colorCycle = ["#3a393c", "#b4a03b", "#518d53"];
  
  const colorMapping = {
    "#3a393c" : 0,
    "#b4a03b" : 1,
    "#518d53" : 2
  };

  useEffect(() => {
    if (submitButtonPress == true) {

      if (possibleWords.length == 6 && wordleWord.length > 0) {

        setCharacterPlacement((prev) => {

          let idRowNum = Number(props.idname[1]) - 1;
          let idColNum = Number(props.idname[3]) - 1;

          return {
            ...prev,
            [props.idname]: possibleWords[idRowNum][idColNum]
          }

        })
      };
    };

    if (resetButtonPress == true) {
      setCharacterPlacement((prev) => {
        let idRowNum = Number(props.idname[1]) - 1;
        let idColNum = Number(props.idname[3]) - 1;

        return {
          ...prev,
          [props.idname]: " "
        }

      })

      setButtonColors((prev) => {
        let idRowNum = Number(props.idname[1]) - 1;
        let idColNum = Number(props.idname[3]) - 1;
  
        wordlePattern[idRowNum][idColNum] = 0;
  
        return {
          ...prev,
          [props.idname]: "#3a393c"
        };
      });

      setSubmitButtonPress(false);
      setResetButtonPress(false);
      setWordleWord("");
      
    }
  }, [submitButtonPress, resetButtonPress]);

  const changeTileColour = (id) => {
    setButtonColors((prev) => {
      const currentColor = colorCycle.indexOf(prev[id]);
      const nextColor = colorCycle[(currentColor + 1) % colorCycle.length];

      let idRowNum = Number(id[1]) - 1;
      let idColNum = Number(id[3]) - 1;

      wordlePattern[idRowNum][idColNum] = colorMapping[nextColor];

      return {
        ...prev,
        [id]: nextColor
      };
    });
  };
  
  return (
    <div
      id = {props.idname}
      onClick={() => changeTileColour(props.idname)}
      style = {{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderColor: "#3a393c",
        borderWidth: "1.5px",
        borderStyle: "solid",
        borderRadius: "2%",

        backgroundColor: buttonColors[props.idname],

        fontFamily: "arial, sans-serif",
        color: "white",
      
        width: "60px",
        height: "60px",
        padding: "auto",
        textAlign: "center",
      
        margin: "3.5px",
      
        cursor: "pointer",
      }}>
      <h1>{characterPlacement[props.idname]}</h1>
    </div>
  );
}

export default PatternTile