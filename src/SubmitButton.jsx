import { findWords } from "./findpattern.js"
import { wordlePattern } from "./global.js";
import { useGlobalContext } from "./GlobalState.jsx";

function SubmitButton() {
  const { setSubmitButtonPress } = useGlobalContext();

  return (
    <div className = "SubmitButton" onClick = {() => setSubmitButtonPress(true)}>
      <h2 className = "SubmitButtonText"> Submit </h2>
    </div>
  );

};

export default SubmitButton