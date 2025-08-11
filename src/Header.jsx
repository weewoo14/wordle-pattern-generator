import { useState } from "react";
import ModalWindow from "./Modal"

function Header() {
  const [instructionsButtonPress, setInstructionsButtonPress] = useState(false);
  return(
    <header>
      <h1 className = "HeaderTitle"> Wordle Pattern Generator </h1>

    <div className = "InstructionsButton">
      <button className="InstructionsButtonBackground" onClick = {() => setInstructionsButtonPress(true)}>
        <h2 className = "InstructionsButtonText"> Instructions </h2>
      </button>
    </div>

    <ModalWindow modalWindowOpen={instructionsButtonPress} modalWindowClose={() => {setInstructionsButtonPress(false)}}>
      <h2> Instructions: </h2>
      <p>
        1. Input any 5 letter word using the "Input Word" button!<br/><br/>
        2. Being clicking on the Wordle grid below! The coloured tiles correspond to the colour the generator will use in finding the words! <br/><br/>
        3. Press the "Submit" button to find words that fulfill your pattern and design!<br/><br/>
        4. Want to make a new design or choose a new word? Press the "Reset" button to reset everything!
      </p>
    </ModalWindow>

    </header>
  );
};

export default Header