import { Children } from "react";

const Backdrop = ({ closeModal }) => (
  <div className="backdrop" onClick={() => closeModal()}></div>
);

const Modal = ({ closeModal, showModal, children, modalTitle }) => {
  // console.log("showModal", showModal);
  return (
    <>
      {showModal && (
        <>
          <Backdrop closeModal={closeModal} />
          <div
            className="modal"
            tabindex="-1"
            role="dialog"
            onClick={() => console.log("I am clickeds")}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalTitle}</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => closeModal()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Modal;
