import React from "react";
import "./AddNew.css";
function AddNew(props) {
  console.log(props);
  return (
    <div className="Add-New-container">
      <img src={require("../../images/Icn_Nothing.png")} alt="no vehicle" />
      <p className="delivery-vehicle-novehicle-text">No {props.text} Added</p>
      <p className="delivery-vehicle-clickbelow-text">
        Click below to add new {props.text}
      </p>
      <div
        onClick={props.onClick}
        style={{
          backgroundColor: "#0074BC",
          padding: "15px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <img src={require("../../images/plus.png")} />
        <p
          style={{
            fontFamily: "bold",
            fontSize: "16px",
            linegeight: " 24px",
            color: "white",
            marginLeft: "10px",
          }}
        >
          Add New {props.text}
        </p>
      </div>
    </div>
  );
}

export default AddNew;
