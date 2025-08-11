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
        1. Click <br/>
        2. Play! <br/>
      </p>
    </ModalWindow>

    </header>
  );
};

export default Header