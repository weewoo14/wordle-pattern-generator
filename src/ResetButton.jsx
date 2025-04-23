import { useGlobalContext } from "./GlobalState";

function ResetButton() {
  const {setResetButtonPress} = useGlobalContext();

  return (
    <div className = "ResetButton" onClick = {() => setResetButtonPress(true)}>
      <h2 className = "ResetButtonText"> Reset </h2>
    </div>
  );
}

export default ResetButton