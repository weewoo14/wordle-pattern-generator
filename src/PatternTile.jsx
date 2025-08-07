import { useEffect, useState } from "react";

import { findWords } from "./findpattern.js";
import { wordlePattern } from "./global";
import { useGlobalContext } from "./GlobalState.jsx";

function PatternTile(props) {
  const { submitButtonPress, setSubmitButtonPress, resetButtonPress, setResetButtonPress, wordleWord, setWordleWord, possibleWords, setPossibleWords, characterPlacement, setCharacterPlacement } = useGlobalContext();

  const [buttonColors, setButtonColors] = useState({
    "r1c1" : "gray",
    "r1c2" : "gray",
    "r1c3" : "gray",
    "r1c4" : "gray",
    "r1c5" : "gray",
  
    "r2c1" : "gray",
    "r2c2" : "gray",
    "r2c3" : "gray",
    "r2c4" : "gray",
    "r2c5" : "gray",
  
    "r3c1" : "gray",
    "r3c2" : "gray",
    "r3c3" : "gray",
    "r3c4" : "gray",
    "r3c5" : "gray",
  
    "r4c1" : "gray",
    "r4c2" : "gray",
    "r4c3" : "gray",
    "r4c4" : "gray",
    "r4c5" : "gray",
  
    "r5c1" : "gray",
    "r5c2" : "gray",
    "r5c3" : "gray",
    "r5c4" : "gray",
    "r5c5" : "gray",
  
    "r6c1" : "gray",
    "r6c2" : "gray",
    "r6c3" : "gray",
    "r6c4" : "gray",
    "r6c5" : "gray"
    
  });

  const colorCycle = ["black", "#b4a03b", "#518d53"];
  
  const colorMapping = {
    "gray" : 0,
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
          [props.idname]: "gray"
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