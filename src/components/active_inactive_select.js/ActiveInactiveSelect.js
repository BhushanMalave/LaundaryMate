import React, { useState } from "react";
import "./ActiveInactiveSelect.css";

export default function ActiveInactiveSelect({ status }) {

  const [select, setSelect] = useState(false);
  const [newStatus, setStatus] = useState(status);
  return (
    <div>
      {(newStatus === "active" || newStatus === "Active" ) && (
        <>
          <div
            className="table-activestatus-container"
            onClick={(e) => {
              e.stopPropagation();
              setSelect(!select);
            }}
          >
            <p className="active-text">Active</p>
            <img
              src={require("../../images/ActiveDownArrow.png")}
              alt="active"
              className="drop-button"
              onClick={(e) => {
                e.stopPropagation();
                setSelect(!select);
              }}
            />
          </div>
          {select && (
            <div
              className="select-container"
              onClick={(e) => {
                e.stopPropagation();
                setStatus("inactive");
                setSelect(false);
              }}
            >
              <p className="select-text">Change to Inactive</p>
            </div>
          )}
        </>
      )}
      {(newStatus === "inactive" || newStatus === "Inactive") && (
        <>
          <div
            className="table-inactivestatus-container"
            onClick={(e) => {
              e.stopPropagation();
              setSelect(!select);
            }}
          >
            <p className="inactive-text">Inactive</p>
            <img
              src={require("../../images/InactiveDownArrow.png")}
              alt="inactive"
              className="drop-button"
              onClick={(e) => {
                e.stopPropagation();
                setSelect(!select);
              }}
            />
          </div>
          {select && (
            <div
              className="select-container"
              onClick={(e) => {
                e.stopPropagation();
                setStatus("active");
                setSelect(false);
              }}
            >
              <p className="select-text">Change to Active</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
