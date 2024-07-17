import React from "react";
import "../customer_status_button/CustomerStatusButton.css";

const CustomerStatusButton = ({ text, style = {} }) => {
  return (
    <>
      {text === "Active" ? (
        <button className="button-container-active" style={{ ...style }}>
          {text}
        </button>
      ) : text === "Inactive" ? (
        <button className="button-container-inactive" style={{ ...style }}>
          {text}
        </button>
      ) : text === "Inprogress" ? (
        <button className="button-container-inprogress" style={{ ...style }}>
          {text}
        </button>
      ) : text === "Hold" ? (
        <button className="button-container-hold" style={{ ...style }}>
          {text}
        </button>
      ) : text === "Cancelled" ? (
        <button className="button-container-cancelled" style={{ ...style }}>
          {text}
        </button>
      ) : (
        <button className="button-container-completed" style={{ ...style }}>
          {text}
        </button>
      )}
    </>
  );
};

export default CustomerStatusButton;
