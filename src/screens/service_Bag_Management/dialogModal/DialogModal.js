import React from "react";
import "./DialogModal.css";

export const DialogModal = ({ click, setClicked }) => {
  const divStyle = {
    display: click ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    setClicked(false);
  }

  return (
    <div className="dialogmodal" onClick={closeModal} style={divStyle}>
      <div className="dialogmodal-content" onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
           alignItems:'center',
            width:'100%'
          }}
        >
          <span className="dialogModalText">Upload Service Bag Details </span>
          <span className="dialogclose" onClick={closeModal}>
            <img
              className="dialogclose-button"
              src={require("../../../images/close.png")}
              alt=""
            />
          </span>
        </div>
        <div className="dialogmodal-innercontent">
        <span className="dialogModal-contenttext">Please select the file containing the CPU capcaity to be uploaded</span>
        <div className="dialognameContainer">
            <span className="dialogModal-hubheader">Hub name</span>
            <span className="dialogModal-hubname">HB001-Jayanagar</span>
        </div>
        <div className="dialogModal-choosefile">

        </div>
        <img src={require('../../../images/uploadBtn.png')} className="dialogModal-img"></img>
        <img src={require('../../../images/cancel.png')}></img>

        </div>
      </div>
    </div>
  );
};
