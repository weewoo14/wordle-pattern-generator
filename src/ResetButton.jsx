import { useGlobalContext } from "./GlobalState";

function ResetButton() {
  const {setResetButtonPress} = useGlobalContext();

  return (
    <div className = "ResetButton">
      <button className = "ResetButtonBackground" onClick = {() => setResetButtonPress(true)}>
        <h2 className = "ResetButtonText"> Reset </h2>
      </button>
    </div>
  );
}

export default ResetButton