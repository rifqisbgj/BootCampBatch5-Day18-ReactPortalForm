import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  maxHeight: "600px",
  width: "700px",
  borderRadius: "10px",
  overflowY: "auto",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
      {/* <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div class="modal-body">{children}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>,
    document.getElementById("portal")
  );
}
