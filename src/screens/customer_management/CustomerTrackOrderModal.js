import React from 'react'
import "./CustomerTrackOrderModal.css"
import VerticalLinearStepper from './VerticalLinearStepper';

const CustomerTrackOrderModal = ({trackModal,setTrackModal}) => {
  const divStyle = {
    display: trackModal ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    setTrackModal(false);
  }
  return (
    <div className="track-order-modal" onClick={closeModal} style={divStyle}>
      <div
        className="track-order-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="track-order-modal-header">
          <span className="track-order-modaltext">Track Order</span>
          <span className="track-order-close" onClick={closeModal}>
            <img
              className="track-order-close-button"
              src={require("../../images/wallet_close.png")}
              alt=""
            />
          </span>
        </div>
        <VerticalLinearStepper/>
     
      </div>
    </div>
  );
}

export default CustomerTrackOrderModal