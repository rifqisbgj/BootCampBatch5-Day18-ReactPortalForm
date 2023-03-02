import React, { useState } from "react";
import Employee from "./Employee";
import FormComp from "./FormComp";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("clicked")}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <br /> <FormComp onClose={() => setIsOpen(false)} />
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>

      <Employee />
    </>
  );
};

export default App;
