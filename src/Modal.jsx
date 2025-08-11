function ModalWindow({ modalWindowOpen, modalWindowClose, children }) {
  console.log (modalWindowOpen);
  if (modalWindowOpen === false) {
    return null;
  };

  return(
    <div className = "modalOverlay">
      <div className = "modalBackdrop" onClick = {modalWindowClose} ></div>
      <div className = "modalContent">
        {children}

        <div className = "closeInstructionsButton">
          <button className = "closeInstructionsButtonBackground" onClick = {modalWindowClose}>
            <h2 className = "closeInstructionsButtonText"> Close </h2>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ModalWindow